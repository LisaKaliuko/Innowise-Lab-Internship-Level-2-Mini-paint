import React, { FC, useState, ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { TOOLS } from '@constants/drawing-tools.constants';
import {
  chooseTool,
  chooseThickness,
  chooseColor,
} from '@actions/draw.actions';
import { ThicknessIcon, PaletteIcon } from '@icons/icons';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import useClickOutside from '@src/core/hooks/use-click-outside.hook';
import {
  selectColor,
  selectThickness,
  selectTool,
} from '@selectors/draw.selectors';
import {
  ComponentContainer,
  IconsContainer,
  Icon,
  DrawIcon,
  Range,
  Palette,
  Title,
} from './drawing-tools-panel.styles';

const DrawingToolsPanelComponent: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentTool = useTypedSelector(selectTool);
  const currentThickness = useTypedSelector(selectThickness);
  const currentColor = useTypedSelector(selectColor);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [rangeValue, setRangeValue] = useState(currentThickness);
  const [isThicknessOpen, setIsThicknessOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteValue, setPaletteValue] = useState(currentColor);

  const clickOnTool = (toolName: string) => (): void => {
    dispatch(chooseTool(toolName));
  };

  const toggleThicknessPanel = () => setIsThicknessOpen(!isThicknessOpen);
  const togglePalettePanel = () => setIsPaletteOpen(!isPaletteOpen);

  const changeThickness = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(+e.target.value);
    dispatch(chooseThickness(+e.target.value));
  };

  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setPaletteValue(e.target.value);
    dispatch(chooseColor(e.target.value));
  };

  useClickOutside(wrapperRef, () => {
    setIsThicknessOpen(false);
    setIsPaletteOpen(false);
  });

  return (
    <ComponentContainer>
      <Title>Painting tools</Title>
      <IconsContainer>
        <Icon title="line thickness" onClick={toggleThicknessPanel}>
          {ThicknessIcon}
        </Icon>
        <Icon title="palette" onClick={togglePalettePanel}>
          {PaletteIcon}
        </Icon>

        {TOOLS.length !== 0 &&
          TOOLS.map(({ value, icon }) => {
            return (
              <DrawIcon
                key={value}
                title={value}
                onClick={clickOnTool(value)}
                isActive={value === currentTool ? true : false}
              >
                {icon}
              </DrawIcon>
            );
          })}
        {isThicknessOpen && (
          <Range ref={wrapperRef}>
            <input
              type="range"
              min="1"
              max="50"
              title={`${rangeValue}`}
              value={rangeValue}
              onInput={changeThickness}
            />
          </Range>
        )}
        {isPaletteOpen && (
          <Palette ref={wrapperRef}>
            <input type="color" value={paletteValue} onChange={changeColor} />
          </Palette>
        )}
      </IconsContainer>
    </ComponentContainer>
  );
};

export default DrawingToolsPanelComponent;

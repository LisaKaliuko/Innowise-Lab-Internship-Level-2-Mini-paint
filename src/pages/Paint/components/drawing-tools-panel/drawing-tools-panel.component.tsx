import React, { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { TOOLS } from '../../../../shared/constants/drawing-tools.constants';
import {
  chooseTool,
  chooseThickness,
  chooseColor,
} from '../../../../core/actions/draw.actions';
import {
  ThicknessIcon,
  PaletteIcon,
} from '../../../../shared/components/icons/icons';
import { useTypedSelector } from '../../../../core/hooks/use-typed-selector.hook';
import {
  selectColor,
  selectThickness,
  selectTool,
} from '../../../../core/selectors/draw.selectors';
import {
  ComponentContainer,
  IconsContainer,
  Icon,
  Range,
  Palette,
} from './drawing-tools-panel.styles';

const DrawingToolsPanelComponent: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentTool = useTypedSelector(selectTool);
  const currentThickness = useTypedSelector(selectThickness);
  const currentColor = useTypedSelector(selectColor);
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

  return (
    <ComponentContainer>
      <p>Painting tools</p>
      <IconsContainer>
        <Icon title="line thickness" onClick={toggleThicknessPanel}>
          {ThicknessIcon}
        </Icon>
        <Icon title="palette" onClick={togglePalettePanel}>
          {PaletteIcon}
        </Icon>

        {TOOLS.length !== 0 &&
          TOOLS.map((tool) => {
            return (
              <Icon
                key={tool?.value}
                title={tool?.value}
                onClick={clickOnTool(tool?.value)}
                className={tool?.value === currentTool ? 'selected' : ''}
              >
                {tool?.icon}
              </Icon>
            );
          })}
        {isThicknessOpen && (
          <Range>
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
          <Palette>
            <input type="color" value={paletteValue} onChange={changeColor} />
          </Palette>
        )}
      </IconsContainer>
    </ComponentContainer>
  );
};

export default DrawingToolsPanelComponent;

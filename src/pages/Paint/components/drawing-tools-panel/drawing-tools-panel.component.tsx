import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { TOOLS } from '../../../../shared/constants/drawing-tools.constants';
import { chooseTool } from '../../../../core/actions/draw.actions';
import { useTypedSelector } from '../../../../core/hooks/use-typed-selector.hook';
import { selectCurrentTool } from '../../../../core/selectors/selectors';
import { ComponentContainer, IconsContainer, Icon } from './styles';

const DrawingToolsPanelComponent: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentTool = useTypedSelector(selectCurrentTool);

  const clickOnTool = (toolName: string) => (): void => {
    dispatch(chooseTool(toolName));
  };

  return (
    <ComponentContainer>
      <p>Painting tools</p>
      <IconsContainer>
        {TOOLS.length !== 0
          ? TOOLS.map((tool) => {
              return (
                <Icon
                  key={tool?.value}
                  onClick={clickOnTool(tool?.value)}
                  className={tool?.value === currentTool ? 'selected' : ''}
                >
                  {tool?.icon}
                </Icon>
              );
            })
          : null}
      </IconsContainer>
    </ComponentContainer>
  );
};

export default DrawingToolsPanelComponent;

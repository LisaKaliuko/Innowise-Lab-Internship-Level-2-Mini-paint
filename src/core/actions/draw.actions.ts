import { createAction } from 'redux-actions';

export enum DrawActionsTypes {
  SET_TOOL = '[DRAW] SET_TOOL',

  SET_THICKNESS = '[DRAW] SET_THICKNESS',

  SET_COLOR = '[DRAW] SET_COLOR',
}

export const chooseTool = createAction(
  DrawActionsTypes.SET_TOOL,
  (toolName: string) => ({ toolName })
);

export const chooseThickness = createAction(
  DrawActionsTypes.SET_THICKNESS,
  (thickness: number) => ({ thickness })
);

export const chooseColor = createAction(
  DrawActionsTypes.SET_COLOR,
  (color: string) => ({ color })
);

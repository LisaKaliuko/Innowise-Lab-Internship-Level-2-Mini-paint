import { createAction } from 'redux-actions';

export enum DrawActionsTypes {
  CHOOSE_TOOL = '[DRAW] CHOOSE_TOOL',
}

export const chooseTool = createAction(
  DrawActionsTypes.CHOOSE_TOOL,
  (toolName: string) => ({ toolName })
);

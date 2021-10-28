import { createAction } from 'redux-actions';

import { PicObj } from '../interfaces/draw.interface';

export enum DrawActionsTypes {
  SET_TOOL = '[DRAW] SET_TOOL',

  SET_THICKNESS = '[DRAW] SET_THICKNESS',

  SET_COLOR = '[DRAW] SET_COLOR',

  SEND_PIC = '[DRAW] SEND_PIC',
  SEND_PIC_SUCCESS = '[DRAW] SEND_PIC_SUCCESS',
  SEND_PIC_ERROR = '[DRAW] SEND_PIC_ERROR',

  GET_ALL_PICS = '[DRAW] GET_ALL_PICS',
  GET_ALL_PICS_SUCCESS = '[DRAW] GET_ALL_PICS_SUCCESS',
  GET_ALL_PICS_ERROR = '[DRAW] GET_ALL_PICS_ERROR',
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

export const sendPic = createAction(DrawActionsTypes.SEND_PIC);

export const sendPicSuccess = createAction(DrawActionsTypes.SEND_PIC_SUCCESS);

export const sendPicError = createAction(
  DrawActionsTypes.SEND_PIC_ERROR,
  (picError: string) => ({ picError })
);

export const getAllPics = createAction(DrawActionsTypes.GET_ALL_PICS);

export const getAllPicsSuccess = createAction(
  DrawActionsTypes.GET_ALL_PICS_SUCCESS,
  (arr: Array<PicObj>) => ({ arr })
);

export const getAllPicsError = createAction(
  DrawActionsTypes.GET_ALL_PICS_ERROR,
  (getPicsErr: string) => ({ getPicsErr })
);

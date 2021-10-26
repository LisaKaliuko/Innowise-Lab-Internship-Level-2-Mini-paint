import { ReactNode, MouseEvent } from 'react';

export interface Tool {
  value: string;
  icon: ReactNode;
}

export interface Coordinates {
  top: number;
  left: number;
}

export interface OnMouseDownArguments {
  e: MouseEvent;
  canvasOffset: Coordinates;
  setIsPainting: (isPainting: boolean) => void;
}

export interface OnMouseMoveArguments {
  e: MouseEvent;
  context: CanvasRenderingContext2D | undefined;
  canvasOffset: Coordinates;
  isPainting: boolean;
  startDrawingPos: Coordinates;
  canvasData: ImageData | undefined;
}

export interface ListOfTools {
  [key: string]: {
    onMouseDown: ({
      e,
      canvasOffset,
      setIsPainting,
    }: OnMouseDownArguments) => Coordinates;
    onMouseMove: ({
      e,
      context,
      canvasOffset,
      isPainting,
      startDrawingPos,
      canvasData,
    }: OnMouseMoveArguments) => void;
  };
}

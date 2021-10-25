import {
  Coordinates,
  OnMouseDownArguments,
  OnMouseMoveArguments,
} from '../../../../core/interfaces/draw.interface';
import { CanvasSize } from '../../../../shared/constants/canvas-size.constants';

const circle = {
  onMouseDown: ({
    e,
    canvasOffset,
    setIsPainting,
  }: OnMouseDownArguments): Coordinates => {
    setIsPainting(true);
    return {
      top: e.pageY - canvasOffset.top,
      left: e.pageX - canvasOffset.left,
    };
  },

  onMouseMove: ({
    e,
    context,
    canvasOffset,
    isPainting,
    startDrawingPos,
    canvasData,
  }: OnMouseMoveArguments): void => {
    if (isPainting && context && canvasData) {
      const radiusX: number = Math.round(
        (e.pageX - canvasOffset.left - startDrawingPos.left) / 2
      );
      const radiusY: number = Math.round(
        (e.pageY - canvasOffset.top - startDrawingPos.top) / 2
      );

      context.clearRect(0, 0, CanvasSize.width, CanvasSize.height);
      context.putImageData(canvasData, 0, 0);
      context.beginPath();
      context.ellipse(
        startDrawingPos.left + radiusX,
        startDrawingPos.top + radiusY,
        Math.abs(radiusX),
        Math.abs(radiusY),
        0,
        0,
        2 * Math.PI
      );
      context.stroke();
    }
  },
};

export default circle;

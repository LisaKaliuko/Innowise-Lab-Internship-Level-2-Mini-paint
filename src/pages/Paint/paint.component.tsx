import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';

import line from './tools/line/line.tool';
import rectangle from './tools/rectangle/rect.tool';
import circle from './tools/circle/circle.tool';
import DrawingToolsPanelComponent from './components/drawing-tools-panel/drawing-tools-panel.component';
import { CanvasSize } from '../../shared/constants/canvas-size.constants';
import { Coordinates, ListOfTools } from '../../core/interfaces/draw.interface';
import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { selectCurrentTool } from '../../core/selectors/selectors';
import { Container, Title, Canvas, DrawingContainer } from './styles';

const tools: ListOfTools = {
  line: line,
  rectangle: rectangle,
  circle: circle,
};

const PaintComponent: FC = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [canvasOffset, setCanvasOffset] = useState({ left: 0, top: 0 });
  const [isPainting, setIsPainting] = useState(false);
  const [canvasData, setCanvasData] = useState<ImageData | undefined>();
  const [startDrawingPos, setStartDrawingPos] = useState({ top: 0, left: 0 });
  const currentTool = useTypedSelector(selectCurrentTool);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext('2d'));
      setCanvasOffset({
        left: canvasRef.current.offsetLeft,
        top: canvasRef.current.offsetTop,
      });
    }
  }, []);

  const onMouseDown = (e: MouseEvent) => {
    const startPosition: Coordinates = tools[currentTool].onMouseDown({
      e,
      canvasOffset,
      setIsPainting,
    });

    setStartDrawingPos(startPosition);

    if (context) {
      setCanvasData(
        context.getImageData(0, 0, CanvasSize.width, CanvasSize.height)
      );
    }
  };

  const onMouseUp = () => {
    setIsPainting(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (context)
      tools[currentTool].onMouseMove({
        e,
        context,
        canvasOffset,
        isPainting,
        startDrawingPos,
        canvasData,
      });
  };

  return (
    <Container>
      <Title>Paint</Title>
      <DrawingContainer>
        <DrawingToolsPanelComponent />
        <Canvas
          id="canvas"
          ref={canvasRef}
          height={`${CanvasSize.height}px`}
          width={`${CanvasSize.width}px`}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        ></Canvas>
      </DrawingContainer>
    </Container>
  );
};

export default PaintComponent;

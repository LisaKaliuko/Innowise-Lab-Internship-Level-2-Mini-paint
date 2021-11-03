import React, { FC, useEffect, useRef, useState, MouseEvent } from 'react';

import line from '@helpers/line.helpers';
import rectangle from '@helpers/rect.helpers';
import circle from '@helpers/circle.helpers';
import brush from '@helpers/brush.helpers';
import eraser from '@helpers/eraser.helpers';
import circleFill from '@helpers/circle-fill.helpers';
import rectangleFill from '@helpers/rect-fill.helpers';
import { DrawingToolsPanel } from './components/drawing-tools-panel';
import { ButtonsPanel } from './components/buttons-panel';
import { Coordinates, ListOfTools } from '@interfaces/draw.interface';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import {
  selectColor,
  selectThickness,
  selectTool,
} from '@selectors/draw.selectors';
import { Container, Title, Canvas, DrawingContainer } from './paint.styles';

const tools: ListOfTools = {
  line: line,
  rectangle: rectangle,
  circle: circle,
  brush: brush,
  eraser: eraser,
  ['fill circle']: circleFill,
  ['fill rectangle']: rectangleFill,
};

const PaintComponent: FC = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [canvasOffset, setCanvasOffset] = useState({ left: 0, top: 0 });
  console.log('canvasOffset', canvasOffset);
  const [canvasSize, setCanvasSize] = useState({ width: 100, height: 100 });
  console.log('canvasSize', canvasSize);
  const [isPainting, setIsPainting] = useState(false);
  const [canvasData, setCanvasData] = useState<ImageData | undefined>();
  const [startDrawingPos, setStartDrawingPos] = useState({ top: 0, left: 0 });
  const currentTool = useTypedSelector(selectTool);
  const currentThickness = useTypedSelector(selectThickness);
  const currentColor = useTypedSelector(selectColor);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext('2d'));
      setCanvasOffset({
        left: canvasRef.current.offsetLeft,
        top: canvasRef.current.offsetTop,
      });
      setCanvasSize({
        width: canvasRef.current.clientWidth,
        height: canvasRef.current.clientWidth / 1.9,
      });
    }
  }, []);

  useEffect(() => {
    if (context) {
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, canvasSize.width, canvasSize.height);
    }
  }, [context, canvasSize]);

  const onMouseDown = (e: MouseEvent) => {
    if (context) {
      context.lineWidth = currentThickness;
      context.strokeStyle = currentColor;
      context.fillStyle = currentColor;
    }

    const startPosition: Coordinates = tools[currentTool].onMouseDown({
      e,
      context,
      canvasOffset,
      setIsPainting,
    });

    setStartDrawingPos(startPosition);

    if (context)
      setCanvasData(
        context.getImageData(0, 0, canvasSize.width, canvasSize.height)
      );
  };

  const onMouseUp = () => {
    setIsPainting(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (context) {
      tools[currentTool].onMouseMove({
        e,
        context,
        canvasOffset,
        isPainting,
        startDrawingPos,
        canvasData,
        canvasSize,
      });
    }
  };

  return (
    <Container>
      <Title>Happy Drawing!</Title>
      <DrawingContainer>
        <DrawingToolsPanel />
        <Canvas
          id="canvas"
          ref={canvasRef}
          height={`${canvasSize.height}px`}
          width={`${canvasSize.width}px`}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        ></Canvas>
        <ButtonsPanel
          context={context}
          canvasRef={canvasRef}
          canvasSize={canvasSize}
        />
      </DrawingContainer>
    </Container>
  );
};

export default PaintComponent;

import { Tool } from '../../core/interfaces/draw.interface';
import {
  RectangleIcon,
  LineIcon,
  CircleIcon,
  BrushIcon,
  EraserIcon,
  RectangleFillIcon,
  CircleFillIcon,
} from '../components/icons/icons';

export const TOOLS: Array<Tool> = [
  { value: 'brush', icon: BrushIcon },
  { value: 'line', icon: LineIcon },
  { value: 'rectangle', icon: RectangleIcon },
  { value: 'fill rectangle', icon: RectangleFillIcon },
  { value: 'circle', icon: CircleIcon },
  { value: 'fill circle', icon: CircleFillIcon },
  { value: 'eraser', icon: EraserIcon },
];

import { Tool } from '../../core/interfaces/draw.interface';
import {
  RectangleIcon,
  LineIcon,
  CircleIcon,
  BrushIcon,
  EraserIcon,
} from '../components/icons/icons';

export const TOOLS: Array<Tool> = [
  { value: 'brush', icon: BrushIcon },
  { value: 'line', icon: LineIcon },
  { value: 'rectangle', icon: RectangleIcon },
  { value: 'circle', icon: CircleIcon },
  { value: 'eraser', icon: EraserIcon },
];

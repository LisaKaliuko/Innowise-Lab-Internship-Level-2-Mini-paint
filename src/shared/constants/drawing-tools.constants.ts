import { Tool } from '../../core/interfaces/draw.interface';
import { RectangleIcon, LineIcon, CircleIcon } from '../components/icons/icons';

export const TOOLS: Array<Tool> = [
  { value: 'line', icon: LineIcon },
  { value: 'rectangle', icon: RectangleIcon },
  { value: 'circle', icon: CircleIcon },
];

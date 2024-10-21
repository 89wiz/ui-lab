import { type WindowsContext } from "../providers/windows-state.provider";
import { type Vector2 } from "./vector2"

export class Window {
  name!: string;
  position!: Vector2;
  size!: Vector2;
  state!: WindowState;
  showAtTaskbar!: boolean;
  horizontalAnchor!: WindowHorizontalAnchor;
  verticalAnchor!: WindowVerticalAnchor;

  onActivate: (context: WindowsContext) => void = (_) => { return; };
  onDeactivate: (context: WindowsContext) => void = (_) => { return; };
}

export type WindowState = 'neutral' | 'maximized' | 'minimized';
export type WindowHorizontalAnchor = 'left' | 'right' | 'center' | 'fill';
export type WindowVerticalAnchor = 'top' | 'bottom' | 'center' | 'fill';
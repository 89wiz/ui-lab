import { type Vector2 } from "./vector2"

export type Window = {
  name: string;
  position: Vector2;
  size: Vector2;
  state: WindowState;
}

export type WindowState = 'neutral' | 'maximized' | 'minimized';
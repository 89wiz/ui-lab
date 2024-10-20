'use client';

import { createContext, type ReactNode, useState } from 'react';
import { type Window } from '../_types/window';

export const WindowsState = createContext<WindowsContext | undefined>(undefined);
export type WindowsContext = {
  windows: Window[];
  maximize: (window: Window) => void;
  minimize: (window: Window) => void;
  restore: (window: Window) => void;
  add: (window: Window) => void;
  close: (window: Window) => void;
}

export default function WindowsStateProvider({ children }: { children: ReactNode }) {

  const [windows, setWindows] = useState<Window[]>([]);

  const context: WindowsContext = {
    windows,
    maximize: (window) => window.state = 'maximized',
    minimize: (window) => window.state = 'minimized',
    restore: (window) => window.state = 'neutral',
    add: (window) => setWindows([...windows, window]),
    close: (window) => setWindows(windows.filter(x => x !== window))
  }

  return (
    <WindowsState.Provider value={context}>
      {children}
    </WindowsState.Provider>
  );
}
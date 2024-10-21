"use client";

import { useContext } from "react";

import { ClockTaskbar } from "./_components/taskbar/clock-taskbar";
import { StartTaskbar } from "./_components/taskbar/start-taskbar";
import { WindowTaskbar } from "./_components/taskbar/window-taskbar";
import { WindowsState } from "./providers/windows-state.provider";

export default function Home() {
  const context = useContext(WindowsState)!;

  return (
    <main className="h-full w-full bg-black">
      <section className="absolute bottom-0 flex h-10 w-[100vw] flex-row gap-2 bg-slate-800">
        <StartTaskbar />
        <div className="flex max-w-[calc(100vw-8.5rem)] flex-grow flex-row items-center justify-start gap-1">
          {context.windows
            .filter((x) => x.showAtTaskbar)
            .map((x) => (
              <WindowTaskbar key={x.name} window={x} />
            ))}
        </div>
        <ClockTaskbar />
      </section>
    </main>
  );
}

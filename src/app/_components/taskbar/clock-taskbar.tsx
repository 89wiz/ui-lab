import { useContext, useEffect, useState } from "react";
import { WindowsState } from "~/app/providers/windows-state.provider";

export function ClockTaskbar() {
  
  const context = useContext(WindowsState)!;

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    });
    return () => clearInterval(timer);
  }, []);



  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeFormat = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <button className="flex w-20 cursor-default flex-col items-center justify-center bg-slate-800 p-2 text-xs font-light text-white transition-colors duration-150 hover:bg-slate-600 active:bg-slate-700 active:text-white/75">
      <span>{timeFormat.format(date)}</span>
      <span>{dateFormat.format(date)}</span>
    </button>
  );
}

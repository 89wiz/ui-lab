import Image from 'next/image';
import { type Window } from "../../_types/window";

export default function WindowTaskbar({ window }: { window: Window }) {
  return (
    <button className="flex h-10 w-40 min-w-10 flex-shrink flex-row items-center justify-start border-b-2 border-white/50 bg-slate-800 px-2 text-xs font-light text-white transition-colors duration-150 hover:bg-slate-600 active:bg-slate-700 active:text-white/75">
      <Image src="/asd.png" width={32} height={32} alt='icon' className="h-8 w-8" />
      {window.name}
    </button>
  );
}

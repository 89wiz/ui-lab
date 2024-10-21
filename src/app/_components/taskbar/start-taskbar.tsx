import { useContext } from 'react';
import { WindowsState } from '~/app/providers/windows-state.provider';

export function StartTaskbar() {
  const context = useContext(WindowsState)!;

  const createWindow = (_event: never) => {
    context.add({
      name: `Window ${context.windows.length + 1}`,
      position: { x: 0, y: 0 },
      size: { x: 300, y: 300 },
      state: "neutral",
      showAtTaskbar: true,
      horizontalAnchor: "left",
      verticalAnchor: "top",
      onActivate: (_) => { return; },
      onDeactivate: (_) => { return; },
    });
  };

  return (
    <button
      className="flex h-10 min-w-10 cursor-default flex-row items-center justify-center bg-slate-800 outline-none transition-colors duration-150 hover:bg-slate-600 active:bg-slate-700 active:text-white/75"
      onClick={createWindow}
    >
      <svg
        className="h-8 w-8 fill-white/50 active:fill-white/25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-445q0-15-9-27t-23-14l-208-34v-80l220 36q44 8 72 41t28 77v512l-320 54Zm-160 0v-80h80v-560q0-34 23.5-57t56.5-23h400q34 0 57 23t23 57v560h80v80H120Zm160-80h400v-560H280v560Z" />
      </svg>
    </button>
  );
}

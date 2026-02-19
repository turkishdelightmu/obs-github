"use client";

import { UiState } from "@/lib/types";

interface HeaderProps {
  uiState: UiState;
  onNewMeeting?: () => void;
}

export default function Header({ uiState, onNewMeeting }: HeaderProps) {
  const showNewMeeting = uiState === UiState.SUCCESS;

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between z-10 sticky top-0 shadow-sm flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">
            {showNewMeeting ? "auto_fix_high" : "description"}
          </span>
        </div>
        <h1 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
          Meeting Note Cleaner
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 text-sm font-medium">
          <span className="material-symbols-outlined text-[20px]">history</span>
          <span className="hidden sm:inline">History</span>
        </button>
        {!showNewMeeting && (
          <>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
              <span className="hidden sm:inline">Settings</span>
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1" />
            <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white font-bold text-xs">
              JD
            </div>
          </>
        )}
        {showNewMeeting && (
          <button
            onClick={onNewMeeting}
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white hover:bg-blue-600 transition-colors text-sm font-bold leading-normal tracking-[0.015em] shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px] mr-2">
              add
            </span>
            <span className="truncate">New Meeting</span>
          </button>
        )}
      </div>
    </header>
  );
}

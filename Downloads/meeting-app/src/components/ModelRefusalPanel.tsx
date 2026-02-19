export default function ModelRefusalPanel() {
  return (
    <section className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-500 text-[20px]">
            shield
          </span>
          <h2 className="text-base font-semibold text-slate-700 dark:text-slate-300">
            Content Policy
          </h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center h-full">
        <div className="size-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[48px]">
            block
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          AI declined to process this transcript
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
          The content was flagged by the AI&apos;s safety filters. This may happen
          if the transcript contains sensitive or inappropriate material.
        </p>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-[16px]">info</span>
          <span>
            No retry will be attempted. Please review your transcript content and
            try with different input.
          </span>
        </div>
        <button className="mt-6 flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/20">
          <span className="material-symbols-outlined text-[18px]">
            edit_note
          </span>
          Edit Transcript
        </button>
      </div>
    </section>
  );
}

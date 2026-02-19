export default function ValidationErrorPanel() {
  return (
    <section className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-orange-200 dark:border-orange-900/50 shadow-sm relative overflow-hidden">
      <div className="px-6 py-4 border-b border-orange-100 dark:border-orange-900/30 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-500 text-[20px]">
            error
          </span>
          <h2 className="text-base font-semibold text-orange-700 dark:text-orange-400">
            Validation Error
          </h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center h-full">
        <div className="size-24 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-orange-400 dark:text-orange-500 text-[48px]">
            data_object
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Could not parse AI response
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
          The AI returned an invalid response that doesn&apos;t match the expected
          format. A retry was attempted but the issue persisted.
        </p>

        {/* Collapsible raw response placeholder */}
        <div className="w-full max-w-md">
          <details className="bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">
                code
              </span>
              View raw response
            </summary>
            <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700">
              <pre className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-pre-wrap text-left">
                {`{ "error": "Invalid JSON structure returned by model" }`}
              </pre>
            </div>
          </details>
        </div>

        <button className="mt-6 flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/20">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Try Again
        </button>
      </div>
    </section>
  );
}

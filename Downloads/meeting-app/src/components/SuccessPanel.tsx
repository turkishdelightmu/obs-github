export default function SuccessPanel() {
  return (
    <section className="flex-1 flex flex-col bg-slate-50 dark:bg-[#0b1118] relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      {/* Sticky Header */}
      <div className="px-8 py-5 flex justify-between items-center bg-slate-50/90 dark:bg-[#0b1118]/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined text-green-500 text-xl">
            check_circle
          </span>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Processed Notes
          </h2>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            AI Confidence: High
          </span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8 pb-32 custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Executive Summary */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-primary text-lg">
                summarize
              </span>
              Executive Summary
            </h3>
            <ul className="space-y-3">
              {[
                "Product launch has been officially delayed by 2 weeks due to critical API latency issues.",
                "The new target launch date is confirmed for November 15th.",
                "The engineering team identified that the data layer requires significant refactoring.",
                "Mike will lead the update of outdated API documentation by Oct 20th.",
                "Stakeholders and roadmap documentation will be updated to reflect the new timeline immediately.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5 shrink-0">
                    fiber_manual_record
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Key Decisions */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider px-1">
              <span className="material-symbols-outlined text-primary text-lg">
                gavel
              </span>
              Key Decisions
            </h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-primary p-5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
                  Delay launch to November 15th
                </h4>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  Confirmed
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 items-center">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    person
                  </span>
                  <span>
                    Owner:{" "}
                    <strong className="text-slate-700 dark:text-slate-200">
                      Sarah (Speaker B)
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_today
                  </span>
                  <span>
                    Effective:{" "}
                    <strong className="text-slate-700 dark:text-slate-200">
                      Immediate
                    </strong>
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-100 dark:border-slate-700 p-3">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex gap-2">
                  <span className="material-symbols-outlined text-[14px] mt-0.5 opacity-50">
                    format_quote
                  </span>
                  &quot;Let&apos;s move the target to November 15th then. Sarah,
                  can you update the stakeholders?&quot;
                </p>
              </div>
            </div>
          </div>

          {/* 3. Next Steps */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider px-1">
              <span className="material-symbols-outlined text-primary text-lg">
                checklist
              </span>
              Next Steps
            </h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700">
              {/* Action Items */}
              {[
                {
                  task: "Update stakeholders on timeline shift",
                  priority: "High",
                  assignee: "Sarah",
                  initial: "S",
                  color: "indigo",
                  due: "ASAP",
                },
                {
                  task: "Fix outdated API documentation",
                  priority: "Medium",
                  assignee: "Mike",
                  initial: "M",
                  color: "pink",
                  due: "Oct 20",
                },
                {
                  task: "Update roadmap documentation",
                  priority: undefined,
                  assignee: "Sarah",
                  initial: "S",
                  color: "indigo",
                  due: undefined,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      readOnly
                      className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {item.task}
                      </p>
                      {item.priority && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                            item.priority === "High"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {item.priority}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-5 h-5 rounded-full bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center font-bold text-[10px]`}
                        >
                          {item.initial}
                        </div>
                        <span>{item.assignee}</span>
                      </div>
                      {item.due && (
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            event
                          </span>
                          <span>{item.due}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Risks & Open Questions */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border border-red-100 dark:border-red-900/30">
              <h3 className="flex items-center gap-2 text-sm font-bold text-red-800 dark:text-red-400 uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-lg">
                  warning
                </span>
                Risks &amp; Blockers
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-red-900/80 dark:text-red-200 flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                  <span>API documentation is outdated (Blocker)</span>
                </li>
                <li className="text-sm text-red-900/80 dark:text-red-200 flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                  <span>Data layer refactoring complexity</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-5 border border-amber-100 dark:border-amber-900/30">
              <h3 className="flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-lg">help</span>
                Open Questions
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-amber-900/80 dark:text-amber-200 flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  <span>Specific scope of data layer refactor?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Action Bar */}
      <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-center pointer-events-none z-20">
        <div className="bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 p-2 pl-6 pr-2 flex items-center gap-6 pointer-events-auto max-w-lg w-full justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span>Was this useful?</span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-green-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  thumb_up
                </span>
              </button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  thumb_down
                </span>
              </button>
            </div>
          </div>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors text-xs font-bold border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
              <span className="material-symbols-outlined text-[16px]">
                content_copy
              </span>
              <span>Text</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full hover:opacity-90 transition-opacity text-xs font-bold shadow-md">
              <span className="material-symbols-outlined text-[16px]">
                markdown
              </span>
              <span>Copy Markdown</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

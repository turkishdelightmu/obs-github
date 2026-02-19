"use client";

import { OutputMode, MAX_CHARS, MIN_CHARS } from "@/lib/types";

interface InputPanelProps {
  transcript: string;
  charCount: number;
  outputMode: OutputMode;
  onTranscriptChange: (value: string) => void;
  onOutputModeChange: (mode: OutputMode) => void;
  onGenerate: () => void;
  isDisabled: boolean;
  isReadOnly: boolean;
  onClear?: () => void;
}

const modeOptions: { value: OutputMode; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "force_en", label: "English" },
  { value: "force_fr", label: "French" },
];

export default function InputPanel({
  transcript,
  charCount,
  outputMode,
  onTranscriptChange,
  onOutputModeChange,
  onGenerate,
  isDisabled,
  isReadOnly,
  onClear,
}: InputPanelProps) {
  const isTooLong = charCount > MAX_CHARS;
  const isTooShort = charCount < MIN_CHARS;
  const generateDisabled = isDisabled || isTooLong || isTooShort;

  return (
    <section
      className={`flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${
        isReadOnly ? "opacity-60 pointer-events-none select-none" : ""
      }`}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">
            edit_note
          </span>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Input Transcript
          </h2>
        </div>
        {onClear && (
          <button
            onClick={onClear}
            className="text-slate-400 hover:text-primary transition-colors"
            title="Clear text"
          >
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
          </button>
        )}
      </div>

      {/* Textarea */}
      <div className="flex-1 p-0 relative min-h-[300px]">
        <textarea
          className="w-full h-full p-6 resize-none border-0 focus:ring-0 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 bg-transparent text-base leading-relaxed absolute inset-0"
          placeholder="Paste your meeting transcript here to begin processing..."
          value={transcript}
          onChange={(e) => onTranscriptChange(e.target.value)}
          readOnly={isReadOnly}
        />
      </div>

      {/* Control Bar */}
      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Segmented Control */}
          <div className="flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-1">
            {modeOptions.map((opt) => (
              <label key={opt.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="lang"
                  className="peer sr-only"
                  checked={outputMode === opt.value}
                  onChange={() => onOutputModeChange(opt.value)}
                />
                <div className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm transition-all">
                  {opt.label}
                </div>
              </label>
            ))}
          </div>

          {/* Character Counter */}
          <div
            className={`text-xs font-medium ${
              isTooLong
                ? "text-red-500"
                : "text-slate-400 dark:text-slate-600"
            }`}
          >
            {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()} chars
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={generateDisabled}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[18px]">
            auto_awesome
          </span>
          Generate Notes
        </button>
      </div>
    </section>
  );
}

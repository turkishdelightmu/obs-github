"use client";

import { useState, useCallback } from "react";
import { UiState, OutputMode, MAX_CHARS } from "@/lib/types";
import Header from "@/components/Header";
import InputPanel from "@/components/InputPanel";
import EmptyOutputPanel from "@/components/EmptyOutputPanel";
import TooLongPanel from "@/components/TooLongPanel";
import MixedPickerOverlay from "@/components/MixedPickerOverlay";
import LoadingPanel from "@/components/LoadingPanel";
import SuccessPanel from "@/components/SuccessPanel";
import ValidationErrorPanel from "@/components/ValidationErrorPanel";
import ModelRefusalPanel from "@/components/ModelRefusalPanel";

const ALL_STATES = Object.values(UiState);

export default function MeetingNoteCleanerPage() {
  const [uiState, setUiState] = useState<UiState>(UiState.EMPTY);
  const [transcript, setTranscript] = useState("");
  const [outputMode, setOutputMode] = useState<OutputMode>("auto");
  const [devOverrideState, setDevOverrideState] =
    useState<UiState | null>(null);

  const charCount = transcript.length;

  // ── Derived UI state from char count ────────────────────────────
  // In normal runtime mode, TOO_LONG is automatic.
  // In dev override mode, selected state is respected as-is.
  const effectiveUiState =
    devOverrideState ??
    (charCount > MAX_CHARS
      ? UiState.TOO_LONG
      : uiState === UiState.TOO_LONG
      ? UiState.EMPTY
      : uiState);

  // ── Handlers ────────────────────────────────────────────────────
  const handleTranscriptChange = useCallback(
    (value: string) => {
      setTranscript(value);
      if (devOverrideState) {
        return;
      }
      // Auto-switch between EMPTY and TOO_LONG states
      if (value.length > MAX_CHARS) {
        setUiState(UiState.TOO_LONG);
      } else if (uiState === UiState.TOO_LONG) {
        setUiState(UiState.EMPTY);
      }
    },
    [devOverrideState, uiState]
  );

  const handleGenerate = useCallback(() => {
    // Placeholder — will be wired to API in Step 3
    console.log("Generate clicked", { charCount, outputMode });
  }, [charCount, outputMode]);

  const handleNewMeeting = useCallback(() => {
    setTranscript("");
    setOutputMode("auto");
    setUiState(UiState.EMPTY);
  }, []);

  const handleCancel = useCallback(() => {
    setUiState(UiState.EMPTY);
  }, []);

  const handleLanguagePick = useCallback((lang: "force_en" | "force_fr") => {
    setOutputMode(lang);
    // Will trigger /api/generate in Step 3; for now go to LOADING as demo
    console.log("Language picked:", lang);
    setUiState(UiState.EMPTY);
  }, []);

  // ── Determine if input panel should be read-only ────────────────
  const inputReadOnly =
    effectiveUiState === UiState.LOADING ||
    effectiveUiState === UiState.SUCCESS ||
    effectiveUiState === UiState.MIXED_PICKER;

  const inputDisabled =
    effectiveUiState === UiState.LOADING ||
    effectiveUiState === UiState.SUCCESS;

  // ── Render output panel by state ────────────────────────────────
  function renderOutputPanel() {
    switch (effectiveUiState) {
      case UiState.EMPTY:
        return <EmptyOutputPanel />;
      case UiState.TOO_LONG:
        return <TooLongPanel charCount={charCount} />;
      case UiState.MIXED_PICKER:
        return <MixedPickerOverlay onSelectLanguage={handleLanguagePick} />;
      case UiState.LOADING:
        return <LoadingPanel onCancel={handleCancel} />;
      case UiState.SUCCESS:
        return <SuccessPanel />;
      case UiState.VALIDATION_ERROR:
        return <ValidationErrorPanel />;
      case UiState.MODEL_REFUSAL:
        return <ModelRefusalPanel />;
      default:
        return <EmptyOutputPanel />;
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-hidden">
      <Header uiState={effectiveUiState} onNewMeeting={handleNewMeeting} />

      <main className="flex-1 overflow-y-auto w-full max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-[calc(100vh-140px)]">
          {/* Left Column: Input */}
          <InputPanel
            transcript={transcript}
            charCount={charCount}
            outputMode={outputMode}
            onTranscriptChange={handleTranscriptChange}
            onOutputModeChange={setOutputMode}
            onGenerate={handleGenerate}
            isDisabled={inputDisabled}
            isReadOnly={inputReadOnly}
            onClear={handleNewMeeting}
          />

          {/* Right Column: Output — varies by state */}
          {renderOutputPanel()}
        </div>
      </main>

      {/* ── DEV STATE TOGGLE (development only) ─────────────────── */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 left-4 z-50 bg-slate-900 text-white rounded-lg shadow-xl border border-slate-700 p-3 text-xs">
          <label className="block mb-1 font-bold text-slate-400 uppercase tracking-wider text-[10px]">
            Dev: UI State
          </label>
          <select
            value={devOverrideState ?? "AUTO"}
            onChange={(e) => {
              const nextValue = e.target.value;
              if (nextValue === "AUTO") {
                setDevOverrideState(null);
                return;
              }
              setDevOverrideState(nextValue as UiState);
              setUiState(nextValue as UiState);
            }}
            className="bg-slate-800 border border-slate-600 text-white text-xs rounded px-2 py-1 w-full focus:ring-primary focus:border-primary"
          >
            <option value="AUTO">AUTO</option>
            {ALL_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

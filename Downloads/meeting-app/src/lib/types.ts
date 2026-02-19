// ── UI State Machine ──────────────────────────────────────────────
export enum UiState {
  EMPTY = "EMPTY",
  TOO_LONG = "TOO_LONG",
  MIXED_PICKER = "MIXED_PICKER",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  MODEL_REFUSAL = "MODEL_REFUSAL",
}

// ── Output mode selector ─────────────────────────────────────────
export type OutputMode = "auto" | "force_en" | "force_fr";

// ── Language detection result ────────────────────────────────────
export type DetectedLanguage = "en" | "fr" | "mixed";

// ── Constants ────────────────────────────────────────────────────
export const MAX_CHARS = 20_000;
export const MIN_CHARS = 50;

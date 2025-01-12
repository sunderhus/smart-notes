export type TranscriptionLanguages = "pt-BR" | "en-US";

export interface TranscriptionProtocol {
  transcribe(
    language: TranscriptionLanguages,
    onTranscribe: (text: string) => void
  ): void;
  stop(): void;
}

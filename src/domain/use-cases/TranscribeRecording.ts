export interface TranscribeRecording {
  transcribe(onTranscribe: (text: string) => void): void;
  stop(): void;
}

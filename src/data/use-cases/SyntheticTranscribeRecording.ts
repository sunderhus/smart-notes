import { TranscribeRecording } from "@/domain/use-cases/TranscribeRecording";
import {
  TranscriptionLanguages,
  TranscriptionProtocol,
} from "@/data/protocols/recording/TranscriptionProtocol";

export class SyntheticTranscribeRecording implements TranscribeRecording {
  constructor(
    private readonly language: TranscriptionLanguages,
    private readonly transcriberClient: TranscriptionProtocol
  ) {}

  transcribe(onTranscribe: (text: string) => void): void {
    this.transcriberClient.transcribe(this.language, onTranscribe);
  }
  stop(): void {
    this.transcriberClient.stop();
  }
}

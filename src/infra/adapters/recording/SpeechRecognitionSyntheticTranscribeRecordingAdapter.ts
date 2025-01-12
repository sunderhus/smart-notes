import { TranscriptionProtocol } from "@/data/protocols/recording/TranscriptionProtocol";

export type SupportedLanguages = "pt-BR" | "en-US";

export class SpeechRecognitionSyntheticTranscribeAdapter
  implements TranscriptionProtocol
{
  constructor(private readonly speechRecognition: SpeechRecognition) {}

  transcribe(
    language: SupportedLanguages,
    screenWriter: (text: string) => void
  ): void {
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      throw new Error("Speech Recognition is not supported.");
    }

    this.speechRecognition.lang = language;
    this.speechRecognition.continuous = true;
    this.speechRecognition.maxAlternatives = 1;
    this.speechRecognition.interimResults = true;

    this.speechRecognition.onresult = (event) => {
      const transcription = this.adapt(event.results);

      screenWriter(transcription);
    };

    this.speechRecognition?.start();
  }

  stop(): void {
    this.speechRecognition?.stop();
  }

  private adapt(results: SpeechRecognitionResultList): string {
    return Array.from(results).reduce((result, text) => {
      return result.concat(text[0].transcript);
    }, "");
  }
}

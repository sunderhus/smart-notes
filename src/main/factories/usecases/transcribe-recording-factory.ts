import { SyntheticTranscribeRecording } from "@/data/use-cases/SyntheticTranscribeRecording";
import { TranscribeRecording } from "@/domain/use-cases/TranscribeRecording";
import { makeSpeechRecognitionSyntheticTranscribeAdapter } from "@/main/factories/adapters/recording/speech-recognition-synthetic-transcribe-adapter-factory";

export const makeTranscribeRecording = (): TranscribeRecording => {
  return new SyntheticTranscribeRecording(
    "pt-BR",
    makeSpeechRecognitionSyntheticTranscribeAdapter()
  );
};

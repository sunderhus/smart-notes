import { SyntheticTranscribeRecording } from "@/data/use-cases/SyntheticTranscribeRecording";
import { makeSpeechRecognitionSyntheticTranscribeAdapter } from "@/main/factories/adapters/recording/speech-recognition-synthetic-transcribe-adapter-factory";

export const makeTranscribeRecording = (): SyntheticTranscribeRecording => {
  return new SyntheticTranscribeRecording(
    "en-US",
    makeSpeechRecognitionSyntheticTranscribeAdapter()
  );
};

import { SpeechRecognitionSyntheticTranscribeAdapter } from "@/infra/adapters/recording/SpeechRecognitionSyntheticTranscribeRecordingAdapter";

export const makeSpeechRecognitionSyntheticTranscribeAdapter =
  (): SpeechRecognitionSyntheticTranscribeAdapter => {
    const SpeechRecognitionApi =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    return new SpeechRecognitionSyntheticTranscribeAdapter(
      new SpeechRecognitionApi()
    );
  };

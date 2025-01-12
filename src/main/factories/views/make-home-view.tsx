import { makeCacheSaveNotes } from "@/main/factories/usecases/cache-save-notes-factory";
import { HomeView } from "@/presentation/views/home-view";
import { makeCacheLoadNotes } from "@/main/factories/usecases/cache-load-notes-factory";
import { makeTranscribeRecording } from "@/main/factories/usecases/transcribe-recording-factory";

export function MakeHomeView() {
  return (
    <HomeView
      saveNotes={makeCacheSaveNotes()}
      loadNotes={makeCacheLoadNotes()}
      transcribeRecording={makeTranscribeRecording()}
    />
  );
}

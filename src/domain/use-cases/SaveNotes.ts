import { Note } from "@/domain/models/Note";

export interface SaveNotes {
  save(notes: Note[]): void;
}

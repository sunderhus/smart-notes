import { Note } from "@/domain/models/Note";

export interface LoadNotes {
  load(): Note[];
}

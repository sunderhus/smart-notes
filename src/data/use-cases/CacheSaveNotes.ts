import { Note } from "@/domain/models/Note";
import { SaveNotes } from "@/domain/use-cases/SaveNotes";
import { SaveCacheProtocol } from "@/data/protocols/cache/SaveCacheProtocol";
import { CacheKey } from "../protocols/cache/CacheKeys";

export class CacheSaveNotes implements SaveNotes {
  constructor(
    private readonly key: CacheKey,
    private readonly client: SaveCacheProtocol
  ) {}

  save(notes: Note[]) {
    this.client.save<Note[]>(this.key, notes);
  }
}

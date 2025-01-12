import { Note } from "@/domain/models/Note";
import { SaveNotes } from "@/domain/use-cases/SaveNotes";
import { SaveCacheProtocol } from "@/data/protocols/cache/SaveCacheProtocol";

export class CacheSaveNotes implements SaveNotes {
  constructor(
    private readonly cacheKey: string,
    private readonly saveCacheClient: SaveCacheProtocol
  ) {}

  save(notes: Note[]) {
    this.saveCacheClient.save<Note[]>(this.cacheKey, notes);
  }
}

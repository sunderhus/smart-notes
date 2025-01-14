import { Note } from "@/domain/models/Note";
import { LoadNotes } from "@/domain/use-cases/LoadNotes";
import { LoadCacheProtocol } from "@/data/protocols/cache/LoadCacheProtocol";
import { CacheKey } from "../protocols/cache/CacheKeys";

export class CacheLoadNotes implements LoadNotes {
  constructor(
    private readonly key: CacheKey,
    private readonly client: LoadCacheProtocol
  ) {}

  load(): Note[] {
    return this.client.load<Note[]>(this.key);
  }
}

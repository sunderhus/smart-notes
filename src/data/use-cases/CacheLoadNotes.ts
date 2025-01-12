import { Note } from "@/domain/models/Note";
import { LoadNotes } from "@/domain/use-cases/LoadNotes";
import { LoadCacheProtocol } from "@/data/protocols/cache/LoadCacheProtocol";

export class CacheLoadNotes implements LoadNotes {
  constructor(
    private readonly key: string,
    private readonly client: LoadCacheProtocol
  ) {}

  load(): Note[] {
    return this.client.load<Note[]>(this.key);
  }
}

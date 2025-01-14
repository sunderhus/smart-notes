import { DeleteNote } from "@/domain/use-cases/DeleteNote";
import { DeleteCacheProtocol } from "../protocols/cache/DeleteCacheProtocol";
import { CacheKey } from "../protocols/cache/CacheKeys";
import { Note } from "@/domain/models/Note";

export class CacheDeleteNote implements DeleteNote {
  constructor(
    private readonly key: CacheKey,
    private readonly client: DeleteCacheProtocol
  ) {}

  delete(id: string): void {
    this.client.delete<Note>(this.key, id);
  }
}

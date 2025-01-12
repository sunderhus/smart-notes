import { CacheSaveNotes } from "@/data/use-cases/CacheSaveNotes";
import { makeLocalStorageSaveCacheProtocolAdapterClient } from "@/main/factories/adapters/cache/local-storage-save-cache-protocol-adapter-client-factory";

export const makeCacheSaveNotes = (): CacheSaveNotes => {
  return new CacheSaveNotes(
    "@smartNotes",
    makeLocalStorageSaveCacheProtocolAdapterClient()
  );
};

import { CacheDeleteNote } from "@/data/use-cases/CacheDeleteNote";
import { makeLocalStorageDeleteCacheProtocolAdapterClient } from "../adapters/cache/local-storage-delete-cache-protocol-adapter-client-factory";

export const makeCacheDeleteNote = (): CacheDeleteNote => {
  return new CacheDeleteNote(
    "@smartNotes",
    makeLocalStorageDeleteCacheProtocolAdapterClient()
  );
};

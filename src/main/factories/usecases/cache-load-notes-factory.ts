import { CacheLoadNotes } from "@/data/use-cases/CacheLoadNotes";
import { makeLocalStorageLoadCacheProtocolAdapterClient } from "../adapters/cache/local-storage-load-cache-protocol-adapter-cliente-factory";

export const makeCacheLoadNotes = (): CacheLoadNotes => {
  return new CacheLoadNotes(
    "@smartNotes",
    makeLocalStorageLoadCacheProtocolAdapterClient()
  );
};

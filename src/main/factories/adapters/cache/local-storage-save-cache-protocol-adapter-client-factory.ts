import { SaveCacheProtocol } from "@/data/protocols/cache/SaveCacheProtocol";
import { LocalStorageSaveCacheProtocolAdapter } from "@/infra/adapters/cache/LocalStorageSaveCacheProtocolAdapter";

export const makeLocalStorageSaveCacheProtocolAdapterClient =
  (): SaveCacheProtocol => {
    return new LocalStorageSaveCacheProtocolAdapter();
  };

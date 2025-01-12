import { LoadCacheProtocol } from "@/data/protocols/cache/LoadCacheProtocol";
import { LocalStorageLoadCacheProtocolAdapter } from "@/infra/adapters/cache/LocalStorageLoadCacheProtocolAdapter";

export const makeLocalStorageLoadCacheProtocolAdapterClient =
  (): LoadCacheProtocol => {
    return new LocalStorageLoadCacheProtocolAdapter();
  };

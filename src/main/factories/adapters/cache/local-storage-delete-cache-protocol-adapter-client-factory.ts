import { DeleteCacheProtocol } from "@/data/protocols/cache/DeleteCacheProtocol";
import { LocalStorageDeleteCacheProtocolAdapter } from "@/infra/adapters/cache/LocalStorageDeleteCacheProtocolAdapter";

export const makeLocalStorageDeleteCacheProtocolAdapterClient =
  (): DeleteCacheProtocol => {
    return new LocalStorageDeleteCacheProtocolAdapter();
  };

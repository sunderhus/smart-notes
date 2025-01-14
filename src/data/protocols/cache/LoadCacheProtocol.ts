import { CacheKey } from "./CacheKeys";

export interface LoadCacheProtocol {
  load<T = unknown>(key: CacheKey): T;
}

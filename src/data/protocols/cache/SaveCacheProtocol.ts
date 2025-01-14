import { CacheKey } from "./CacheKeys";

export interface SaveCacheProtocol {
  save<T = unknown>(key: CacheKey, content: T): void;
}

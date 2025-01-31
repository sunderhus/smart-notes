import { CacheKey } from "./CacheKeys";

export interface DeleteCacheProtocol {
  delete(key: CacheKey, id: string): void;
}

import { CacheKey } from "./CacheKeys";

export interface DeleteCacheProtocol {
  delete<T extends { id: string }>(key: CacheKey, id: string): T;
}

export interface LoadCacheProtocol {
  load<T = unknown>(key: string): T;
}

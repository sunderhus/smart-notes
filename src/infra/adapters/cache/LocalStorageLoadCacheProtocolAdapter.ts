import { LoadCacheProtocol } from "@/data/protocols/cache/LoadCacheProtocol";

export class LocalStorageLoadCacheProtocolAdapter implements LoadCacheProtocol {
  load<T>(key: string): T {
    const cacheContent = localStorage.getItem(key);
    const parsedContent = this.adapt<T>(cacheContent);
    return parsedContent;
  }

  private adapt<T>(content: string | null): T {
    if (!content) {
      return JSON.parse("[]");
    }
    return JSON.parse(content);
  }
}

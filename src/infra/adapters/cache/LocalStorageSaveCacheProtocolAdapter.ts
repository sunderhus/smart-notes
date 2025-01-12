import { SaveCacheProtocol } from "@/data/protocols/cache/SaveCacheProtocol";

export class LocalStorageSaveCacheProtocolAdapter implements SaveCacheProtocol {
  save<T>(key: string, content: T): void {
    const parsedContent = this.adapt<T>(content);

    localStorage.setItem(key, parsedContent);
  }

  private adapt<T>(content: T): string {
    return JSON.stringify(content);
  }
}

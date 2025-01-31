import { DeleteCacheProtocol } from "@/data/protocols/cache/DeleteCacheProtocol";

export class LocalStorageDeleteCacheProtocolAdapter
  implements DeleteCacheProtocol
{
  delete<T extends { id: string }>(key: string, id: string): void {
    const cache = localStorage.getItem(key);
    const parsedCache = this.adapt<T>(cache);
    let deletedItem: T | undefined;

    const filteredCache = parsedCache.filter((item) => {
      if (item.id === id) {
        deletedItem = item;
        return false;
      }
      return true;
    });

    localStorage.setItem(key, JSON.stringify(filteredCache));

    if (!deletedItem) {
      throw new Error("Item not found");
    }

    return;
  }

  private adapt<T = { id: string }>(cache: string | null): Array<T> {
    if (!cache) {
      return JSON.parse("[]");
    }

    return JSON.parse(cache);
  }
}

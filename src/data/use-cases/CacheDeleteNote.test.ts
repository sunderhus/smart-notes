import { expect, test } from "vitest";
import { CacheDeleteNote } from "./CacheDeleteNote";
import { CacheKey } from "../protocols/cache/CacheKeys";
import { DeleteCacheProtocol } from "../protocols/cache/DeleteCacheProtocol";

class ClientSpy implements DeleteCacheProtocol {
  key!: string;
  id!: string;

  constructor() {}

  delete<Note>(key: CacheKey, id: string): Note {
    this.id = id;
    this.key = key;
    return { id, title: "any_title", description: "any_description" } as Note;
  }
}

const makeSut = () => {
  const clientSpy = new ClientSpy();
  const sut = new CacheDeleteNote("@smartNotes", clientSpy);
  return { sut, clientSpy };
};

test("should execute delete with correct params", () => {
  const { sut, clientSpy } = makeSut();
  sut.delete("1YTIBUI123");

  expect(clientSpy.id).toBe("1YTIBUI123");
  expect(clientSpy.key).toBe("@smartNotes");
});

test("should call multiples times with correct params", () => {
  const { sut, clientSpy } = makeSut();
  sut.delete("1YTIBUI123");
  sut.delete("1YTIBUI124");
  sut.delete("1YTIBUI125");

  expect(clientSpy.id).toBe("1YTIBUI125");
  expect(clientSpy.key).toBe("@smartNotes");
});

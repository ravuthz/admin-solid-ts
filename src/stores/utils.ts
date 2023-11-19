export type StorageType = "localStorage" | "sessionStorage";

function createStorage(storage: StorageType, name: string) {
  return {
    setVal: (val: any) =>
      (window[storage] as any)?.setItem(name, JSON.stringify(val) ?? "{}"),
    getVal: () => JSON.parse((window[storage] as any)?.getItem(name) || "{}"),
  };
}

export default createStorage;
import {
  Accessor,
  ParentComponent,
  Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

import { localStore } from "./localStore";
import { globalStore } from "./globalStore";
import { sessionStore } from "./sessionStore";

export type Project = any;

export type RootState = {
  local: ReturnType<typeof localStore>;
  global: ReturnType<typeof globalStore>;
  session: ReturnType<typeof sessionStore>;
  storeSignal: Accessor<number>;
  setStoreSignal: Setter<number>;
};

const StoreContext = createContext<RootState>();

export const StoreProvider: ParentComponent = (props) => {
  const [storeSignal, setStoreSignal] = createSignal(1);
  return (
    <StoreContext.Provider
      value={{
        local: localStore(),
        global: globalStore(),
        session: sessionStore(),
        storeSignal,
        setStoreSignal,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreSelector = () => useContext(StoreContext)!;

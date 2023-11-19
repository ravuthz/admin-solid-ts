import { createRoot, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import createStorage from "./utils";

const { setVal, getVal } = createStorage("sessionStorage", "sessionStore");

export function sessionStore() {
  const [state, setState] = createStore<any>({
    projects: [],
    project: {},
    count: 0,
  });

  onMount(() => {
    setState(getVal());
  });

  const updateState = (data: any) => {
    setState(data);
    setVal(state);
  };

  return {
    state,
    setState: updateState,
    count: () => state.count,
    setCount: (count: number) => {
      updateState({
        ...state,
        count,
      });
    },
  };
}

const createSessionStore = createRoot(sessionStore);

export default createSessionStore;

import { createSignal, createRoot } from "solid-js";
import { createStore } from "solid-js/store";

import { Project } from ".";

export function globalStore() {
  const [projects, setProjects] = createStore<Project[]>([]);
  const [project, setProject] = createStore<Project>({});
  const [count, setCount] = createSignal<number>(0);

  return {
    projects,
    setProjects,
    project,
    setProject,
    count,
    setCount,
  };
}

const createGlobalStore = createRoot(globalStore);

export default createGlobalStore;

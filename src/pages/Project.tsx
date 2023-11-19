import { For, Show, createEffect, createResource } from "solid-js";

import Loading from "../components/Loading";
import localStore from "../stores/localStore";
import globalStore from "../stores/globalStore";

const fetchProjects = () => {
  return fetch("https://api.escuelajs.co/api/v1/users").then((res) => {
    return res.json();
  });
};

const fetchProject = async (id: number) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  return res.json();
};

function Project() {
  const [data] = createResource(fetchProjects);

  createEffect(() => {
    if (data()) {
      localStore.setState({
        projects: data(),
      });
      globalStore.setProjects(data());
    }
  });

  const handleViewClick = (data: any) => {
    fetchProject(data.id)
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div>
      <h1 class="text-center text-3xl py-10 font-bold">Projects</h1>

      <Loading loading={data.loading} />

      <Show when={data.error}>
        <div class="alert alert-error">
          <div class="flex-1">
            <label>Error:</label>
            <label>{data.error}</label>
          </div>
        </div>
      </Show>

      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <Show when={data.state === "ready" || data()}>
            <For each={globalStore.projects}>
              {(item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      class="btn btn-primary"
                      onClick={() => handleViewClick(item)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              )}
            </For>
          </Show>
        </tbody>
      </table>
    </div>
  );
}

export default Project;

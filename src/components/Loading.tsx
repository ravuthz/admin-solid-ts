import { Show } from "solid-js";

export type LoadingProps = {
  loading: boolean;
};

const Loading = (props: LoadingProps) => {
  return (
    <Show when={props.loading}>
      <div class="text-center mt-20">
        <span class="loading loading-dots loading-lg"></span>
      </div>
    </Show>
  );
};

export default Loading;

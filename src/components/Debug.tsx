export type DebugProps = {
  children: any;
  show?: boolean;
  label?: string;
};

function Debug(props: DebugProps) {
  return (
    <details class="p-2 hover:cursor-pointer" open={props.show || true}>
      <summary class="text-red-500 font-bold">{props.label || "Debug"}</summary>
      <pre class="border p-2 m-2">
        {JSON.stringify(props.children || {}, null, 2)}
      </pre>
    </details>
  );
}

export default Debug;

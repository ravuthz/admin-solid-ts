import { useStoreSelector } from "../stores";

function Counter() {
  const { local } = useStoreSelector();
  return (
    <div>
      <h1>Counter {local.count()}</h1>
    </div>
  );
}

export default Counter;

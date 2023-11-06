import { createSignal } from "solid-js";

import viteLogo from "/vite.svg";
import solidLogo from "./assets/solid.svg";

const tailwindLogo =
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="container mx-auto">
        <h1 class="text-center text-3xl py-10 font-bold">
          Vite + Solid TS + TailwindCSS
        </h1>

        <div class="flex justify-center flex-col items-center">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>

          <button
            class=" bg-gray-500 border rounded-md px-4 py-2 mt-4 text-white"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count()}
          </button>

          <div class="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="text-green-700">Click on the logos to learn more</p>
            <div class="flex flex-row justify-center">
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} class="logo" alt="Vite logo" />
              </a>

              <a href="https://solidjs.com" target="_blank">
                <img src={solidLogo} class="logo" alt="Solid logo" />
              </a>

              <a href="https://tailwindcss.com" target="_blank">
                <img src={tailwindLogo} class="logo" alt="TailWind logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

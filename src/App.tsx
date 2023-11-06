import { createSignal } from "solid-js";

import viteLogo from "/vite.svg";
import solidLogo from "./assets/solid.svg";
import ToggleDarkMode from "./components/ToggleDarkMode";

const tailwindLogo =
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg";

const daisyuiLogo =
  "https://daisyui.com/images/daisyui-logo/daisyui-logomark.svg";

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

          <div class="mt-4">
            <ToggleDarkMode />
          </div>

          <button
            class="btn btn-primary mt-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count()}
          </button>

          <div class="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="text-green-700 text-center mb-5">
              Click on the logos to learn more
            </p>
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

              <a href="https://daisyui.com" target="_blank">
                <img src={daisyuiLogo} class="logo" alt="DaisyUI logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

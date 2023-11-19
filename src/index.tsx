/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { StoreProvider } from "./stores";

render(
  () => (
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  ),
  document.getElementById("root")!
);

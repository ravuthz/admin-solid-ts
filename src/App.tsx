import { Suspense, lazy } from "solid-js";
import { A, useRoutes } from "@solidjs/router";

import Loading from "./components/Loading";
// import { A, Route, Routes } from "@solidjs/router";

// import Home from "./pages/Home";
// const About = lazy(() => import("./pages/About"));
const Contact = () => (
  <h1 class="text-center text-3xl py-10 font-bold">Contact Page</h1>
);
const NotFound = () => (
  <h1 class="text-center text-3xl py-10 font-bold text-red-900">
    Oooops, Not Found - 404
  </h1>
);

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/About")),
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/projects",
    component: lazy(() => import("./pages/Project")),
  },
  {
    path: "*",
    component: NotFound,
  },
];

const AppMenus = () => {
  return (
    <nav class="w-full">
      <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box w-full">
        <li>
          <A href="/" end={true}>
            Home
          </A>
        </li>
        <li>
          <A href="/about">About</A>
        </li>
        <li>
          <A href="/contact">Contact</A>
        </li>
        <li>
          <A href="/projects">Projects</A>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const AppRoutes = useRoutes(routes);

  return (
    <>
      <Suspense fallback={<Loading loading />}>
        <div class="container mx-auto">
          <AppMenus />
          <AppRoutes />
          {/* <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="*" component={NotFound} />
        </Routes> */}
        </div>
      </Suspense>
    </>
  );
};

export default App;

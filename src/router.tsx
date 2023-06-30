import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Like } from "./pages/Like";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Layout } from "./components/Layout";
import { Project } from "./pages/Project";

const routerData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/like",
    element: <Like />,
  },
  {
    path: "/project",
    element: <Project />,
  },
];

export const router: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router.element}</Layout>,
    };
  })
);

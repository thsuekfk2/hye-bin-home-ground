import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Like } from "./pages/Like";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Layout } from "./components/Layout";
import { Project } from "./pages/Project";
import { NotFound } from "./pages/NotFound";

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
  {
    path: "*",
    element: <NotFound />,
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

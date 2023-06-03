import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Like } from "./pages/Like";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Layout } from "./components/layout/Layout";

const routerData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/like",
    element: <Like />,
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

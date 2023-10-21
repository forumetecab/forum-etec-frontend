import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import React from "react";
const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/inscricao",
        Component: () => <Navigate to={"/"} />,
      },
      {
        path: "/voucher",
        Component: () => <Navigate to={"/"} />,
      },
      {
        path: "/galeria",
        element: (
          <React.Suspense>
            <Gallery />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;

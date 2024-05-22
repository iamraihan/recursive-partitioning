import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import MainLayout from "@/layout/MainLayout";
import LayoutBuilder from "@/components/layout-builder";
import AlphabetTiles from "@/components/alphabet-tiles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "recursive-partitioning",
        element: <LayoutBuilder />,
      },
      {
        path: "alphabetical-interaction",
        element: <AlphabetTiles />,
      },
    ],
  },
]);

export default routes;

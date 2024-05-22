import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import MainLayout from "@/layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;

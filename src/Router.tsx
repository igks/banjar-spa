import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Splash />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;

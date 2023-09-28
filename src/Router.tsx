import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;

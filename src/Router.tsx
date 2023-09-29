import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";
import Login from "./pages/login";
import { PATH } from "./constants/path";

const Router = () => {
  const routes = [
    {
      path: PATH.splash,
      element: <Splash />,
    },
    {
      path: PATH.home,
      element: <Home />,
    },
    {
      path: PATH.login,
      element: <Login />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default Router;

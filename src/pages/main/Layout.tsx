import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Router from "../../Router";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setActivePage } from "../../states/slices/page";
import { useDispatch } from "react-redux";
import { pageName } from "./../../constants/page";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;

  useEffect(() => {
    dispatch(setActivePage(pageName[pathname]));
  }, [pathname, dispatch]);

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: 0,
        height: "100vh",
        width: "100wh",
      }}
    >
      <Header />
      <Body>
        <Router />
      </Body>
      <Footer />
    </Container>
  );
};

export default Layout;

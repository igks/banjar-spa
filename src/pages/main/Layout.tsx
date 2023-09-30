import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Router from "../../Router";
import { Container } from "@mui/material";

const Layout = () => {
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

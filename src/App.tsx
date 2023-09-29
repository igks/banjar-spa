import { createTheme, ThemeProvider } from "@mui/material/styles";
import teal from "@mui/material/colors/teal";
import Layout from "./pages/main/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: {
        main: "#64b5f6",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

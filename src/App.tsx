import { createTheme, ThemeProvider } from "@mui/material/styles";
import teal from "@mui/material/colors/teal";
import Layout from "./pages/main/Layout";

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
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;

import Navbar from "./Navbar";
import Footer from "./Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Home from "./Home";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({

    palette: {
      mode: paletteType
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }



  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Home />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

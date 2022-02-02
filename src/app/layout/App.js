import Navbar from "./Navbar";
import Footer from "./Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { Route, Switch } from "react-router-dom";
import Privacy from "./Privacy";
import Terms from "./Terms";
import CaseStudy from "./CaseStudy";


/*

Art direction for landing page image:
Change Icons for hamburger menu
componentize the differet pages, i.e., develop a common view for each page for as long as possible





*/


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
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/home" component={Home}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/contact" component={Contact}>
        </Route>
        <Route path="/projects" component={Projects}>
        </Route>
        <Route path="/privacy" component={Privacy}>
        </Route>
        <Route path="/terms" component={Terms}>
        </Route>
        <Route path="/casestudy" component={CaseStudy}>
        </Route>
      </Switch>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

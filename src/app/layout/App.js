import Navbar from "./Navbar";
import Footer from "./Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Blog from "./Blog";
import Privacy from "./Privacy";
import Terms from "./Terms";
import TenderCrown from "./TenderCrown";
import TheTalkative from "./TheTalkative";
import FirstInView from "./FirstInView";
import TraditionalElegance from "./TraditionalElegance";
import KidzApp from "./KidzApp";
import JaydalinRoyal from "./JaydalinRoyal";

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
      mode: paletteType,
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/casestudy/tendercrown" component={TenderCrown} />
        <Route path="/casestudy/thetalkative" component={TheTalkative} />
        <Route path="/casestudy/firstinview" component={FirstInView} />
        <Route
          path="/casestudy/traditionalelegance"
          component={TraditionalElegance}
        />
        <Route path="/casestudy/kidzapp" component={KidzApp} />
        <Route path="/casestudy/jaydalinroyal" component={JaydalinRoyal} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

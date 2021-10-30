import { useEffect, useState } from "react";
import navdata from "./json/nav.json";
import DesktopNav from "./desktop/index";
import MobileNav from "./mobile/index";

import Home from "../../pages/home";
import WebDesign from "../../pages/web-design";
import GraphicDesign from "../../pages/graphic-design";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  const [navstate, setnavstate] = useState();
  const [windowstate, setwindowstate] = useState(0);

  useEffect(() => {
    async function navinit() {
      await setnavstate(navdata);

      await setwindowstate(window.innerWidth);
    }
    navinit();
  }, []);

  if (windowstate < 600) {
    return (
      <Router>
        <MobileNav />
      </Router>
    );
  } else {
    return (
      <Router>
        <DesktopNav navstate={navstate} />
        <Switch>
          <Route path="/web-design">
            <WebDesign />
          </Route>
          <Route path="/graphic-design">
            <GraphicDesign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

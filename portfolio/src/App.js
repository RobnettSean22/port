import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Landing from "./Compnents/Landing/Landing";
import About from "./Compnents/About/About";
import Portfolio from "./Compnents/Portfolio/Portfolio";
import Resume from "./Compnents/Resume/Resume";
import Contact from "./Compnents/Contact/Contact";

export default function App() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "traanslate(100%,0,0" },
    enter: { opacity: 1, transform: "traanslate(0%,0,0" },
    leave: { opacity: 0, transform: "traanslate(-50%,0,0" }
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} styly={props}>
      <Switch location={location}>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </animated.div>
  ));
}

import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Landing from "./Compnents/Landing/Landing";
import About from "./Compnents/About/About";
import Portfolio from "./Compnents/Portfolio/Portfolio";
import Resume from "./Compnents/Resume/Resume";
import Contact from "./Compnents/Contact/Contact";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0%,100%" },
    enter: { opacity: 1, transform: "translate(0,0%" },
    leave: { opacity: 0, transform: "translate(0,-50%" }
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </animated.div>
  ));
};

export default App;

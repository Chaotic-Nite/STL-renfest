import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import Footer from "./components/footer/Footer";
import logo from "./images/StLouisLogo-white.png";
import "./App.css";
import "./css/additional-styles.css";
import backprint from './images/steelgray-print.jpg'


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  let isMobile = width <= 1024 ? true : false;

  return (
    <div className="App" style={{backgroundImage: `url(${backprint})`}}>
      <header className="top-line">
        <Link to="/" id="logo">
          <img src={logo} alt="" />
        </Link>
        {isMobile ? null : (
          <ul className="contacts">
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="/directions">Directions</Link>
            </li>
          </ul>
        )}
      </header>
      <nav className="main-body">
        <Switch>
          {routes &&
            routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.Component}
              />
            ))}
        </Switch>
      </nav>
      <Footer />
    </div>
  );
}

export default App;

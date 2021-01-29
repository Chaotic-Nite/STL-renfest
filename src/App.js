import logo from "./images/renaissance-festival-logo.png";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img id="logo" src={logo} alt="" />
        </Link>
      </header>
      <Navigation sticky="top" />
      <nav>
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
    </div>
  );
}

export default App;

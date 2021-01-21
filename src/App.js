import logo from "./images/renaissance-festival-logo.png";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </nav>
    </div>
  );
}

export default App;

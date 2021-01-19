import logo from "./images/renaissance-festival-logo.png";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt="" />
      </header>
      <Navigation />
      <nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </nav>
    </div>
  );
}

export default App;

import "./App.css";
import Badges from "./Badges";
import SplashPage from "./SplashPage";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Badges /> */}
      <Router>
        <Switch>
          <Route path="/home" component={Badges} />
          <Route path="/" component={SplashPage} />
        </Switch>
        {/* <div className="App">
        <Tasks />
      </div> */}
      </Router>
      {/* <SplashPage /> */}
    </div>
  );
}
//           <Link to="/about">About</Link>
export default App;

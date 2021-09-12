import "./App.css";
import Badges from "./Badges";
import SplashPage from "./SplashPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OrdersPage from "./OrdersPage";
import ThankyouPage from "./ThankyouPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ThankYou" exact component={ThankyouPage} />
          <Route path="/Orders" exact component={OrdersPage} />
          <Route path="/home" exact component={Badges} />
          <Route path="/" exact component={SplashPage} />
        </Switch>
      </Router>
    </div>
  );
}
//           <Link to="/about">About</Link>
export default App;

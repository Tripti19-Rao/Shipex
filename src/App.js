import NavBar from './components/NavBar';
import ShippingForm from './views/ShippingForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListShippings from "./views/ListShippings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/view-orders">
            <NavBar navLink={{path: "/", label: "Home"}} />
            <ListShippings />
          </Route>
          <Route path="/" exact>
            <NavBar navLink={{path: "/view-orders", label: "View orders"}} />
            <ShippingForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

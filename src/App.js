import './App.css';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Signup/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

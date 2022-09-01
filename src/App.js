import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainDashboard from './pages/Dashboard';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <MainDashboard/>
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

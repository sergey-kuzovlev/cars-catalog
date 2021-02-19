import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import CarDetailPage from './components/car/CarDetailPage';
import { Navbar } from './components/navbar/Navbar';
import { createBrowserHistory } from 'history';
import FilteredCars from './containers/FilteredCarsList';
import Login from './components/user/Login';
import { Registration } from './components/user/Registration';

const history = createBrowserHistory();

function App() {
  return (
  <div className="App">
    <Router history={history}>
    <Navbar />
      <div className="main-page-img">
        <div className="text container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={FilteredCars} />
        <Route path="/car/:id" component={CarDetailPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;

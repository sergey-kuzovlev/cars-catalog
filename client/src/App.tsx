import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import CarDetailPage from './components/carDetails/CarDetailPage';
import { Navbar } from './components/navbar/Navbar';
import { createBrowserHistory } from 'history';
import FilteredCars from './containers/FilteredCarsList';

const history = createBrowserHistory();

function App() {
  return (
  <div className="App">
    <Navbar />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={FilteredCars} />
        <Route path="/car/:id" component={CarDetailPage} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;

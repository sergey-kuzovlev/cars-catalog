import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import CarDetailPage from './components/main/CarDetailPage';
import { CarsTable } from './components/main/CarsTable';
import { Navbar } from './components/navbar/Navbar';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router history={history}>
        <CarsTable />
        <Switch>
          <Route path="/car/:id" component={CarDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from '../../pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

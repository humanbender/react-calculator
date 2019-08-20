import React from 'react';


import Panel from './container/Panel/Panel';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Settings from './container/Panel/Settings';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Panel} />
        <Route exact path='/settings' component={Settings} />

    

      </Switch>
      <header className="App-header">
       
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

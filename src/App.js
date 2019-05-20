import React from 'react' 
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './firestore';

import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className='App'>
        <AppNavbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)


export default App


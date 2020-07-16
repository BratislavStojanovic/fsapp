import React from 'react';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

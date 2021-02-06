import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar';
import CreateProduct from './components/product/CreateProduct/CreateProduct';
import UserProducts from './components/product/UserProducts/UserProducts';
 
function App() {
  const [registering, setRegistering] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar 
          setRegistering={setRegistering} 
          user={user} 
          setUser={setUser} 
        />
        <Switch>          
          <Route 
            path="/" exact 
            render={() => <Home /> }
          />
          <Route 
            path="/auth" exact 
            render={() => <Auth registering={registering} setRegistering={setRegistering} setUser={setUser} /> } 
          />
          <Route
            path="/upload" exact
            render={() => <CreateProduct user={user} /> }
          />
          <Route
            path="/products/self" exact
            render={() => <UserProducts user={user} /> }
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

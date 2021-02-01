import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar';
 
function App() {
  const [registering, setRegistering] = useState(false);
  const [user, setUser] = useState({ id: '', username: 'name'});

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar setRegistering={setRegistering} />
        <Switch>          
          <Route 
            path="/" exact 
            render={() =>
              <Home user={user} /> 
              }
          />
          <Route 
            path="/auth" exact 
            render={() => 
              <Auth 
                registering={registering} 
                setRegistering={setRegistering}
                setUser={setUser} 
              /> } 
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

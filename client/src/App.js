import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavBar from './components/Navbar/Navbar';
 
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

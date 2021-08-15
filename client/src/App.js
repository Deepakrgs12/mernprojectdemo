import React, { createContext,useReducer }  from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import {Route, Switch} from 'react-router-dom';
import Error from './components/Error';
import Logout from './components/Logout';
 import { initialState, reducer} from './reducer/UseReducer';

export const UserContext = createContext();

function App() {
  const [state, dispatch]  = useReducer(reducer, initialState);
  return (
    <>
     <UserContext.Provider value={{state, dispatch}} >
    <Navbar/>
<Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/signup">
      <Signup/>
      </Route>

      <Route path="/login">
      <Login/>
      </Route>

      <Route path="/about">
      <About/>
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>
      
      <Route path="/logout">
      <Logout/>
      </Route>
      <Route>
        <Error/>
      </Route>
      </Switch>
       </UserContext.Provider> 

    </>
  );
}

export default App;

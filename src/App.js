import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./Page/Homepage";


function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/bonjour/1">liens 1 </Link>
          <Link to="/bonjour/2">liens 2 </Link>
          <Link to="/bonjour/3">liens 3 </Link>
       <Switch>
           <Route exact path="/">
               <Homepage/>
           </Route>
           <Route path="/bonjour/1">
               <h1>Salut</h1>
           </Route>
           <Route path="/bonjour/2">
               <h1>à</h1>
           </Route>
           <Route path="/bonjour/3">
               <h1>Tous</h1>
           </Route>
           <Route path="/">
               <h1>404</h1>
           </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;

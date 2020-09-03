import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./Page/Homepage";
import ArticlePages from "./ArticlePages";

const articles = [
    {id:50,title:"super article"},
    {id:2,title:"nouveau super article"},
    {id:5,title:"super géniale article"},
    {id:68,title:"super wowowowow article"},
    {id:56,title:"super bidule très chere article"},

]

function App() {
  return (
    <div className="App">
      <Router>
          <nav>
              <ul>
                  {articles.map(article => <li>
                        <Link to={"/article/"+article.id}>{article.title}</Link>
                      </li>)}
              </ul>
          </nav>
          <Link to="/bonjour/1">liens 1 </Link>
          <Link to="/bonjour/2">liens 2 </Link>
          <Link to="/bonjour/3">liens 3 </Link>
       <Switch>
           <Route exact path="/" component={Homepage}>
               {/*<Homepage/>*/}
           </Route>
           <Route path="/article/:id/" component={ArticlePages}/>
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

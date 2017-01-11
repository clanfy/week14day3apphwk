import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import Gryffindor from './components/Gryffindor.jsx';
import Hufflepuff from './components/Hufflepuff.jsx';
import Ravenclaw from './components/Ravenclaw.jsx';
import Slytherin from './components/Slytherin.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//nest some routes inside the router
window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}/>
        <Route path="gryffindor" component={Gryffindor}/>
        <Route path="hufflepuff" component={Hufflepuff}/>
        <Route path="ravenclaw" component={Ravenclaw}/>
        <Route path="slytherin" component={Slytherin}/>
      </Route>
    </Router>,
    document.getElementById('app')
    );
};


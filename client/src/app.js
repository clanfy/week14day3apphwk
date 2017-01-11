import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Gryffindor from './components/Gryffindor.jsx';
import Pricing from './components/Pricing.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//nest some routes inside the router
window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}/>
        <Route path="gryffindor" component={Gryffindor}/>
        <Route path="about" component={About}/>
        <Route path="pricing" component={Pricing}/>
      </Route>
    </Router>,
    document.getElementById('app')
    );
};


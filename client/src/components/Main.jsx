import React from 'react';
import Home from './Home.jsx';
import Gryffindor from './Gryffindor.jsx';
import Hufflepuff from './Hufflepuff.jsx';
import {Link} from 'react-router';



class Main extends React.Component{

  render(){
    return (
      <div>
      <h4>The Houses of Hogwarts</h4>
        <nav className='nav'>
           <button><Link to='/home'>Home</Link></button>
           <button><Link to='/gryffindor'>Gryffindor</Link></button>
           <button><Link to='/hufflepuff'>Hufflepuff</Link></button>
         </nav>
         {this.props.children} 
      </div>
      )
  }

}

export default Main;

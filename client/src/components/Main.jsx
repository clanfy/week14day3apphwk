import React from 'react';
import Home from './Home.jsx';
import Gryffindor from './Gryffindor.jsx';
import Hufflepuff from './Hufflepuff.jsx';
import Ravenclaw from './Ravenclaw.jsx';
import Slytherin from './Slytherin.jsx';
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
           <button><Link to='/ravenclaw'>Ravenclaw</Link></button>
           <button><Link to='slytherin'>Slytherin</Link></button>
         </nav>
         {this.props.children} 
      </div>
      )
  }

}

export default Main;

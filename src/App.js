// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to React
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  
  constructor(){
    super();


    this.state={
       monsters:[],
       searchList:'',
       filteredMonsters:[]
    }
    //const filteredMonsters =[];
    //bind this when you want to declare your functions with not es6 syntax
   // this.handleChange = this.handleChange.bind(this);  
  }

//create functions and methods here
//life cycle methods
componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
  .then(data=> {
    this.setState({monsters:data});
    this.setState({filteredMonsters:data});
  });
 

}


    
handleChange =(e)=>{
 // loop through the monsters and filter the monsters using monstername
     this.setState({searchField:e.target.value});
     this.setState({filteredMonsters:this.state.monsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))});
}

  render(){

 let {monsters, searchField, filteredMonster} = this.state;

    //inorder not to modify the monster array when user type
    // destructuring
   // filteredMonster = this.state.monsters
  //  .filter(monster => monster.name.includes(searchField))

    return(
      <div className="App">
      <h1>Monster Application</h1>
      <SearchBox id="search-box" placeholder="Seach Monstera" handleChange={this.handleChange}/>

        <CardList monsters={this.state.filteredMonsters}></CardList>
     
      </div>
  
    );
  }
}

export default App;

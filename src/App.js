import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component { 

  constructor(props) {
      super(props);

      this.state = { 
        monsters: [],
        searchField: ''
      }; 

      // this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}));
  }

  // clickHandler({target}) {
  //   let count = this.state.count;
  //     this.setState({
  //       string: `Hello again ${count}`,
  //       count: ++count
  //     });
  // }

  searchInputChange = ({target}) => {
      this.setState({
        searchField: target.value
      });
  }

  render() {
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(({name}) => name.toLowerCase().includes(searchField.toLowerCase()));

      return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder='search monsters' handleChange={this.searchInputChange}/>
          <CardList monsters={filteredMonsters} />
        </div>
      );
  }
}

export default App;

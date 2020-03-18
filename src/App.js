import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = { 
        monsters: [],
        searchField: ''
      };

      // this.clickHandler = this.clickHandler.bind(this);
      this.searchInputChange = this.searchInputChange.bind(this);
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

  searchInputChange({target}) {
      console.log(target.value);
      this.setState({
        searchField: target.value
      })
  }

  render() {
      return (
        <div className="App">
          <input type='search' placeholder='search monsters' onChange={this.searchInputChange} />
          <CardList monsters={this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField))} />
        </div>
      );
  }
}

export default App;

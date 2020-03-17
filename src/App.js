import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = { 
        monsters: []
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

  render() {
      return (
        <div className="App">
          <CardList monsters={this.state.monsters} />
        </div>
      );
  }
}

export default App;

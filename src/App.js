import React, {Component} from 'react';
import Mel from './Mel.js';
class App extends Component {
constructor() {
  super();
  this.state = {
    ninjas: [
      {name: 'Mellisa', age: 23, religion: 'Christianity', id: 1},
      {name: 'John', age: 25, religion: 'Islam', id: 2},
      {name: 'Jane', age: 22, religion: 'Hinduism', id: 3}
    ]
  };
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Welcome :) </p>
        <Mel ninjas={this.state.ninjas} />
      </header>
    </div>
  );
}
}

export default App;

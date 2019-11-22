import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Counters from './components/counters';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Counters />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

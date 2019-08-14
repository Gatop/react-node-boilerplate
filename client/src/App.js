import React, { Component } from 'react';

import Button from './components/atoms/Button/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Button
              buttonText="This is a button"
              buttonClasses="a-button--primary"/>
      </div>
    );
  }
}

export default App;

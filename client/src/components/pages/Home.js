import React from 'react';

import Button from '../atoms/Button/Button';

class App extends React.Component {
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

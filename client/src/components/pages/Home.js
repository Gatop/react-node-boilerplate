import React from 'react';

import Button from '../atoms/Button/Button';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Button
          buttonText="This is a button"
          buttonClasses="a-button--primary"/>
      </div>
    );
  }
}

export default Home;

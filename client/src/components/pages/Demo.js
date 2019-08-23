import React from 'react';

import Button from '../atoms/Button/Button';

class Demo extends React.Component {
  render() {
    return (
      <div className="Demo">
        <Button
          buttonText="This is a button"
          buttonClasses="a-button--primary"/>
      </div>
    );
  }
}

export default Demo;

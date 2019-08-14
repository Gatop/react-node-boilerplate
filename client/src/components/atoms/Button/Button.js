import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button className={"a-button " + (this.props.buttonClasses)}>
        {this.props.buttonText}
      </button>
    )
  }
}

// Properties
Button.propTypes = {
  buttonText : PropTypes.string.isRequired,
  buttonClasses : PropTypes.string
}

export default Button;
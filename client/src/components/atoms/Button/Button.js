import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClasses: this.setCustomButtonClasses(this.props.buttonClasses),
    };

  }

  // Set correct modifiers according button selector
  setCustomButtonClasses(classes) {
    if (classes) {
      const newButtonClasses = classes.reduce((acc, val) => {
        return acc + ' a-button--' + val;
      }, '');

      return newButtonClasses;
    } else {
      return '';
    }
  }

  render() {
    return (
      <button className={ 'a-button ' + (this.state.buttonClasses) }>
        {this.props.buttonText}
      </button>
    );
  }
}

// Properties
Button.propTypes = {
  buttonText : PropTypes.string.isRequired,
  buttonClasses : PropTypes.array
};

export default Button;
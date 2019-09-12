import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.setCustomButtonClasses = this.setCustomButtonClasses.bind(this);
  }

  // Set correct modifiers according button selector
  setCustomButtonClasses(classes) {
    if (!classes) {
      return '';
    }

    return classes.map((eachClass) => ('a-button--' + eachClass)).join(' ');
  }

  render() {
    const customClasses = this.setCustomButtonClasses(this.props.buttonClasses);

    return (
      <button className={ 'a-button ' + customClasses }>
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
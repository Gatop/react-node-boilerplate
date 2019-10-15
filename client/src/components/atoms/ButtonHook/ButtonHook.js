import React from 'react';
import PropTypes from 'prop-types';

function ButtonHook(props) {
  const customClasses = setCustomClasses(props.buttonClasses);

  function setCustomClasses(classes) {
    if (!classes) {
      return '';
    }

    return classes.map((eachClass) => ('a-button--' + eachClass)).join(' ');
  }

  return (
    <button className={ 'a-button ' + customClasses }>
      {props.buttonText}
    </button>
  );
}

// Properties
ButtonHook.propTypes = {
  buttonText : PropTypes.string.isRequired,
  buttonClasses : PropTypes.array
};

export default ButtonHook;
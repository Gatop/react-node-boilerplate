import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import * as HTTP from '../../../services/http';

const { useState } = React;

function Button(props) {
  const customClasses = setCustomClasses(props.buttonClasses);
  const [ data, setData ] = useState('initial');

  function setCustomClasses(classes) {
    if (!classes) {
      return '';
    }

    return classes.map((eachClass) => ('a-button--' + eachClass)).join(' ');
  }

  function getNewColor() {
    if (props.buttonAction) {
      HTTP.get(props.buttonAction)
        .then((response) => {
          setData(response);
        });
    }
  }

  return (
    <button className={ 'a-button ' + customClasses } onClick={ getNewColor } style={ { backgroundColor: data.code } }>
      {props.buttonText}
    </button>
  );
}

// Properties
Button.propTypes = {
  buttonText : PropTypes.string.isRequired,
  buttonClasses : PropTypes.array,
  buttonAction : PropTypes.string,
};

export default Button;
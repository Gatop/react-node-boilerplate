import React from 'react';
import PropTypes from 'prop-types';
import './AspectRatio.scss';

class AspectRatio extends React.Component {
  constructor(props) {
    super(props);

    // Methods
    this.calculatePaddingTop = this.calculatePaddingTop.bind(this);
  }

  // Claculate top ratio percentage to be used in render
  calculatePaddingTop() {
    const paddingTopRatio = this.props.ratio === 0 ? 100 : 100 / this.props.ratio;
    return paddingTopRatio;
  }

  render() {
    const paddingTopRatio = this.calculatePaddingTop();

    const outerWrapperStyle = {
      paddingTop: `${ paddingTopRatio }%`
    };

    return (
      <div className='a-aspect-ratio'>
        <div className='a-aspect-ratio__outer-wrapper' style={ outerWrapperStyle }>
          <div className='a-aspect-ratio__inner-wrapper'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// Properties
AspectRatio.propTypes = {
  children: PropTypes.any,
  ratio: PropTypes.number,
};

export default AspectRatio;
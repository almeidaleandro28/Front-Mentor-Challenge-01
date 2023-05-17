import React from 'react';
import PropTypes from 'prop-types';

MobileComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

function MobileComponent({ src, alt}) {
  return (
    <img src={ src } alt={ alt } />
  );
}

export default MobileComponent;
import React from 'react';
import PropTypes from 'prop-types';

DesktopComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

function DesktopComponent( { src, alt } ) {
  return (
      <img className='w-full' src={src} alt={alt} />
  );
}

export default DesktopComponent;
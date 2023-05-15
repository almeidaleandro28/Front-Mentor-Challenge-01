import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../imagens/logo/logo.svg';

Logo.propTypes = {
  
};

function Logo(props) {
  return (
    <img src={ logo } alt="logo" />
  );
}

export default Logo;
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../datadisplay/Logo';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <header className='bg-pink-200'>
      <Logo />
    </header>
  );
}

export default Header;
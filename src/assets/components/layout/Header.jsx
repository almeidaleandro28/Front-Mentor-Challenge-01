import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../datadisplay/Logo';
import Hero from './Hero';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <header className='bg-pink-200 pl-2 pt-3 pb-5'>
      <Logo />
    </header>
  );
}

export default Header;
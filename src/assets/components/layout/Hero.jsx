import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MobileComponent from '../datadisplay/MobileComponent';
import DesktopComponent from '../datadisplay/DesktopComponent';


Hero.propTypes = {
  
};

function Hero( props ) {

  const [ width, setWidth ] = useState(window.innerWidth);

  const mobileImage = <MobileComponent  src={"src/assets/imagens/photo/hero-mobile.jpg"} alt={"woman"} />;
  const desktopImage =  <DesktopComponent src={"src/assets/imagens/photo/hero-desktop.jpg"} alt={"woman"} />;

  const breakPoint = 640;

  const showImage = ( width > breakPoint ) ? desktopImage:  mobileImage;

  useEffect( () => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  
  return (
    <section className='md:col-span-2 md:row-span-3'>
      {showImage}
    </section>  
  );
}

export default Hero;


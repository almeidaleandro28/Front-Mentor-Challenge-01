import Logo from '../datadisplay/Logo';
import Hero from './Hero';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <header className='bg-pink-200 pl-2 pt-3 pb-5 md:col-span-1 md:row-span-1'>
      <div className="container mx-auto px-4 py-4">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
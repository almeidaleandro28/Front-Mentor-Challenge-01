import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
  
};

function Footer(props) {
  return (
    <footer className='md:row-span-4'>
      <div className="container mx-auto px-4 py-4 text-center">
        
        <header className='mb-2 mt-8'>
          <h1 className='text-6xl text-pink-300 font-sans'>we're</h1>
          <h2 className=' text-6xl font-sans'>coming </h2>
          <h3 className='text-6xl font-sans'>soon</h3>
        </header>

        <section className='mb-8'>
          <p className='w-4/5 text-justify m-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Reiciendis cum aliquid autem ipsum labore dolor porro vel iusto architecto sapiente
            reprehenderit consequuntur provident,
            Velit quos corrupti consectetur libero et officia corporis ab quae, consectetur?
            </p>
        </section>

        <footer className='flex w-4/5 mx-auto relative'>
            <input className='w-full  border-pink-700 border-2 rounded-xl relative py-2'
               type="email" 
               placeholder='email address' />
            <div className='h-full bg-pink-300 rounded-xl absolute right-0 flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-caret-right" 
                viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
            </div>
        </footer>

      </div>
    </footer>
  );
}

export default Footer;
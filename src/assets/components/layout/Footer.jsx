import { useEffect, useState } from "react";
import regexEmail from '../../util/Regex.jsx'

function Footer(props) {

  const [ emailErr, setEmailErr ] = useState( null );
  const [ email, setEmail ] = useState('');

  const isValidEmail = ( email ) => {
    return regexEmail.test( email )
  }

  const handlerValidation = ( e ) => {
    if ( !isValidEmail( email ) ){
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
 }


  return (
    <footer className='md:row-span-4 bg-pink-200 '>
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

            <input className='w-full border-pink-300 border-2 rounded-xl relative py-2 
              placeholder:text-pink-400 placeholder:pl-2
              active:border-red-600 hover:border-red-600'
              type="email" 
              placeholder='email address'
              value={ email }
              onChange={ ( e ) => setEmail( e.target.value ) }
              />
              

            <button className='h-full bg-pink-400 rounded-xl absolute right-0 flex items-center pl-8 pr-8 
              cursor-pointer
              focus:bg-pink-300
              hover:scale-x-150 hover:bg-pink-300 active:scale-x-150 active:bg-pink-300' 
              onClick={ handlerValidation }>
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-caret-right" 
                viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1
                 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 
                 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
            </button>
            
        </footer>
        <div>
          { emailErr && <span className="text-pink-400">please provider a valid email!</span> }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
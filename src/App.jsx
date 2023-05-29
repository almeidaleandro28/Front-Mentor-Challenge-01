import Footer from './assets/components/layout/Footer'
import Header from './assets/components/layout/Header'
import Hero from './assets/components/layout/Hero'

function App() {

  return (
    <div className='md:grid md:grid-cols-3 md:grid-rows-[100px_repeat(2, minmax(0, 1fr) ) ]'>
     <Header />
     <Hero />
     <Footer />
    </div>
  )
}

export default App

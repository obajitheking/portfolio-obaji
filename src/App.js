import React from 'react'
import './index.css';

import Hadar from './components/header/Hadar';
import Nav from './components/nav/Nav';
import About  from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
       
        <Hadar />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App
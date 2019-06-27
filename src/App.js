import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import Nav from './Nav';
import Checkout from './Checkout';
const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className='App' style={fade}>
      <header className='App-header'>
        <img src={logo} className='logo' alt='Logo' />
        <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;

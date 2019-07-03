import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
// import Routes from './Routes';
// import Nav from './Nav';
import Modal from './Modal';
import Checkout from './Checkout';
import Accordion from './Accordion';
// import Waypoints from './Waypoints';
// import Gesture from './Gesture';
import Boxes from './Boxes';
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
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="Logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Modal />
        <Accordion />
        {/* <Waypoints /> */}
        {/* <Routes /> */}
        {/* <Gesture /> */}
        <Boxes />
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;

import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Boxes from './Boxes';

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });
  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="checkout-left">
        <Boxes isToggled={isOpen} />
      </animated.div>
      <animated.div
        style={{ transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`) }}
        className="checkout-right"
      />
    </div>
  );
};

export default Checkout;

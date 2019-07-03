import React from 'react';
import { animated, useSprings } from 'react-spring';

const Boxes = () => {
  const items = [0.5, 0.7, 0.9, 1, 0.1];
  const springs = useSprings(
    items.length,
    items.map(item => ({
      from: {
        opacity: 0
        // transform: 'translate3d(-50%, 0, 0)'
      },
      to: {
        opacity: item
        // transform: 'translate3d(0, 0, 0)'
      }
    }))
  );
  return (
    <div className="boxes-grid">
      {springs.map(animation => (
        <animated.div style={animation} className="box" />
      ))}
    </div>
  );
};

export default Boxes;

import React from 'react';
import { animated, useTrail } from 'react-spring';

const Boxes = ({ isToggled }) => {
  const items = [0.5, 0.7, 0.9, 1, 0.1];
  const trail = useTrail(items.length, {
    transform: isToggled ? 'trasnlate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    opacity: isToggled ? 1 : 0
  });
  return (
    <div className="boxes-grid">
      {trail.map(animation => (
        <animated.div style={animation} className="box" />
      ))}
    </div>
  );
};

export default Boxes;

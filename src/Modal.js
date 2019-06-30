import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Modal = ({ closeModal, animation }) => {
  return (
    <div className="modal">
      <animated.div className="modal-card" style={animation}>
        <h1>Modal</h1>
        <button onClick={() => closeModal(false)}>Close</button>
      </animated.div>
    </div>
  );
};
const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: { opcacity: 0, transform: 'translate3d(0, -40px, 0)' },
    enter: { opcacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opcacity: 0, transform: 'translate3d(0, -40px, 0)' }
  });
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && <Modal animation={animation} closeModal={toggle} />
      )}
      <button onClick={() => toggle(true)}>Open</button>
    </div>
  );
};

export default ModalWrapper;

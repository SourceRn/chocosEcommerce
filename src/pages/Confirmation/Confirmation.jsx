import React from 'react';
import './Confirmation.css';
import successImage from '../../assets/succesful-purchase.png';

const Confirmation = () => (
  <div className='confirmation'>
    <div
      className="confirmation-img"
    ></div>
    <div className='confirmation-message'>
      <h2>¡Gracias por tu compra!</h2>
      <p>
        Tu pedido estará listo para recoger entre{' '}
        <span className="pickup-time">2:00 PM y 3:00 PM</span>.
      </p>
    </div>
  </div>
);

export default Confirmation;

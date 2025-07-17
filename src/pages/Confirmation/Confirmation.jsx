import React from 'react';
import './Confirmation.css';
import successImage from '../../assets/succesful-purchase.png';

const Confirmation = () => (
  <div className='confirmation'>
    <h2>Thank you for your purchase</h2>

    <img
      src={successImage}
      alt="Purchase success"
      className='confirmation-image'
    />

    <p>Your order will be ready for pickup between:</p>

    <div className='pickup-time'>3:00pm – 4:00pm</div>
  </div>
);

export default Confirmation;

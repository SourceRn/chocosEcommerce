import React, { useEffect, useState, useRef } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css';
import successImage from '../../assets/succesful-purchase.png';

const Confirmation = () => {
  const { cart, getTotal, clearCart } = useCart();
  const [pickupStart, setPickupStart] = useState('');
  const [pickupEnd, setPickupEnd] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const printRef = useRef();

  useEffect(() => {
    const now = new Date();

    const dateFormatted = now.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(dateFormatted);

    const start = new Date(now);
    start.setHours(now.getHours() + 1);

    const end = new Date(now);
    end.setHours(now.getHours() + 6);

    const closing = new Date(now);
    closing.setHours(22, 0, 0);

    if (end > closing) {
      end.setHours(22, 0, 0);
    }

    const formatTime = (d) =>
      d.toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
      });

    setPickupStart(formatTime(start));
    setPickupEnd(formatTime(end));

    setTimeout(() => clearCart(), 1000);
  }, []);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const win = window.open('', '', 'height=600,width=800');
    win.document.write('<html><head><title>Ticket de compra</title>');
    win.document.write(`
      <style>
        body {
          font-family: 'Helvetica Neue', sans-serif;
          padding: 2rem;
          color: #333;
        }
        h2 {
          text-align: center;
          margin-bottom: 1rem;
        }
        .ticket {
          max-width: 480px;
          margin: 0 auto;
          border: 1px dashed #a0522d;
          padding: 1.5rem;
          border-radius: 6px;
          background-color: #fff;
        }
        .ticket-row, .ticket li {
          display: flex;
          justify-content: space-between;
          padding: 0.4rem 0;
          border-bottom: 1px solid #eee;
        }
        .ticket li:last-child, .ticket-row:last-child {
          border-bottom: none;
        }
        .ticket h3 {
          text-align: center;
          margin-bottom: 1rem;
        }
        .summary-info {
          margin-bottom: 1rem;
        }
      </style>
    `);
    win.document.write('</head><body>');
    win.document.write(printContents);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
  };

  return (
    <div className='confirmation'>
      <h2>¡Gracias por tu compra!</h2>

      <img
        src={successImage}
        alt="Purchase success"
        className='confirmation-image'
      />
      {/* Ticket impreso */}
      <div ref={printRef} className="ticket">
        <h3>Ticket de Compra</h3>

        <div className="summary-info">
          <div><strong>Fecha:</strong> {date}</div>
          <div><strong>Recoger entre:</strong> {pickupStart} – {pickupEnd}</div>
        </div>

        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="ticket-row">
          <span>Total:</span>
          <span><strong>${getTotal().toFixed(2)}</strong></span>
        </div>

        <div className="ticket-row">
          <span>Forma de pago:</span>
          <span>PayPal</span>
        </div>
      </div>

      <div className="confirmation-actions">
        <button onClick={() => navigate('/products')}>Volver a productos</button>
        <button onClick={handlePrint}>Imprimir ticket</button>
      </div>
    </div>
  );
};

export default Confirmation;

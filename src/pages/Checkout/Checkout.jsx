import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=MXN`;
    script.addEventListener("load", () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: getTotal().toFixed(2),
                      currency_code: "MXN",
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(function (details) {
                alert("Pago completado por " + details.payer.name.given_name);
                clearCart();
                window.location.href = "/confirmation";
              });
            },
            onError: (err) => {
              console.error(err);
              alert("Error en el pago");
            },
          })
          .render("#paypal-button-container");
      }
    });
    document.body.appendChild(script);

    // Limpieza del script si el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="checkout-form">
      <h2>Resumen de pago</h2>

      {/* Muestra tus productos y total como ya lo haces */}
      <div className="checkout-summary">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${getTotal().toFixed(2)}
        </p>
      </div>

      {/* Botón de PayPal */}
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default Checkout;

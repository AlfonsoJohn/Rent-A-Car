import React from 'react';

const Payment = () => {
  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div className="payment-page">
      <div className="container">
        <h2>Payment</h2>
        <form onSubmit={handlePayment}>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Card Holder Name" required />
          <input type="text" placeholder="Expiry Date" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;


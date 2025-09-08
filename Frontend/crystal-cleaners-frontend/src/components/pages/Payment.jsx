import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
   const { bookingId } = useParams();

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Please enter your payment details for booking ID: {bookingId}</p>
      {/* Add your payment form here */}
    </div>
  );
};

export default Payment; 
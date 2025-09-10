import React from "react";
import { useParams, useLocation } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import "./Payment.css";


// Example services + prices (replace with your real booking data)
  const services = [
    { name: "Office Cleaning", price: 200000 },
    { name: "Window Cleaning", price: 80000 },
    { name: "Carpet Cleaning", price: 40000 },
    {name: "Bathroom Cleaning", price: 30000},
    {name: "Bedroom Cleaning", price: 25000},
    {name: "Kitchen Cleaning", price: 35000},
  ];

const PaymentPage = () => {
  //const { bookingId } = useParams();
  const { state } = useLocation();
  

  const bookedServiceName = state?.serviceType || "Office Cleaning"; // fallback
  const bookingId = state?.bookingId || "UNKNOWN";                 // backend ID
  const customerEmail = state?.customerEmail || "customer@email.com";

  // 2. Find service details
  const bookedService = services.find(s => s.name === bookedServiceName) || services[0];
//const totalAmount = bookedService.price;

  

  // Demo: assume user booked the first service
  
  const totalAmount = bookedService.price;

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_5f7166886ef199f821ac8d2b8576da5d5b360ec2", //public test paystack key
      email: customerEmail, // You can pass real booking email later
      amount: totalAmount * 100, // Paystack expects amount in kobo
      currency: "NGN",
      reference: "BOOKING-" + bookingId, // tie payment to booking
      
      onSuccess: (transaction) => {
        alert("Payment Successful! Reference: " + transaction.reference);
        console.log("Booking ID:", bookingId, "Transaction:", transaction);
        // TODO: send bookingId + transaction.reference to your backend
      },
      onCancel: () => {
        alert("Payment cancelled.");
      },
    });
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Complete Your Payment</h2>

        <div className="payment-summary">
          <h3>Booking Summary</h3>
          <div className="summary-row">
            <span>Service:</span>
            <span>{bookedService.name}</span>
          </div>
          {/* <div className="summary-row">
            <span>Name: </span>
            <span>{bookedService.name}</span>
          </div> */}
          <div className="summary-row">
            <span>Booking ID:</span>
            <span>{bookingId}</span>
          </div>  
          <div className="summary-row total">
            <span>Total:</span>
            <span>₦{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="payment-button">
          <button className="paystack-btn" onClick={payWithPaystack}>
            Pay Now
          </button>
        </div>


      </div>
    </div>
  );
};

export default PaymentPage;

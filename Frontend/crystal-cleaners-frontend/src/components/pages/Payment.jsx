import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import "./Payment.css";

// Example services + prices (replace with your real booking data)
const services = [
  { name: "Office Cleaning", price: 200000 },
  { name: "Window Cleaning", price: 80000 },
  { name: "Carpet Cleaning", price: 40000 },
  { name: "Bathroom Cleaning", price: 30000 },
  { name: "Bedroom Cleaning", price: 25000 },
  { name: "Kitchen Cleaning", price: 35000 },
];

const PaymentPage = () => {
  const { bookingId } = useParams();
  const { state } = useLocation();
  
  // State for room selection
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  
  const bookedServiceName = state?.serviceType || "Office Cleaning";
  const customerEmail = state?.customerEmail || "customer@email.com";
  const customerName = state?.customerName || "Customer";

  // Find service details
  const bookedService = services.find(s => s.name === bookedServiceName) || services[0];

  console.log('Booking ID from URL:', bookingId);
  
  // Calculate total amount based on number of rooms
  const basePrice = bookedService.price;
  const totalAmount = basePrice * numberOfRooms;

  // Handle room number change
  const handleRoomChange = (e) => {
    const rooms = parseInt(e.target.value);
    if (rooms > 0 && rooms <= 50) {
      setNumberOfRooms(rooms);
    }
  };

  // Increment/Decrement room functions
  const incrementRooms = () => {
    setNumberOfRooms(prev => prev < 50 ? prev + 1 : prev);
  };

  const decrementRooms = () => {
    setNumberOfRooms(prev => prev > 1 ? prev - 1 : 1);
  };

  // ✅ Send confirmation to backend
  const sendPaymentConfirmation = async (paymentData) => {
    try {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/payments/confirm`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Failed to send payment confirmation to backend");
      }

      const data = await response.json();
      console.log("Backend confirmation response:", data);
    } catch (error) {
      console.error("Error sending payment confirmation:", error);
    }
  };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_5f7166886ef199f821ac8d2b8576da5d5b360ec2",
      email: customerEmail,
      amount: totalAmount * 100, // Paystack expects amount in kobo
      currency: "NGN",
      reference: "BOOKING-" + bookingId + "-" + Date.now(),
      
      onSuccess: (transaction) => {
        alert('Payment Successful!\nReference:${transaction.reference}\nBooking ID: ${bookingId}');
        console.log("Payment Details:" ,{
          bookingId,
          customerName,
          customerEmail,
          service: bookedService.name,
          numberOfRooms,
          totalAmount,
          transaction,
        });
        
        // ✅ Send payment confirmation to backend
        sendPaymentConfirmation({
          bookingId,
          customerName,
          customerEmail,
          service: bookedService.name,
          numberOfRooms,
          totalAmount,
          transactionRef: transaction.reference,
          paymentStatus: "success",
        });
      },
      onCancel: () => {
        alert("Payment cancelled.");
        console.log("Payment cancelled for booking:", bookingId);
      },
    });
  };

  // Debug: Log received state
  useEffect(() => {
    console.log("Payment page received state:", state);
    console.log("Booking ID:", bookingId);
  }, [state, bookingId]);

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Complete Your Payment</h2>

        <div className="payment-summary">
          <h3>Booking Summary</h3>
          
          <div className="summary-row">
            <span>Customer:</span>
            <span>{customerName}</span>
          </div>
          
          <div className="summary-row">
            <span>Service:</span>
            <span>{bookedService.name}</span>
          </div>
          
          <div className="summary-row">
            <span>Price per room:</span>
            <span>₦{basePrice.toLocaleString()}</span>
          </div>

          {/* Room Selection Section */}
          <div className="summary-row">
            <span>Number of Rooms:</span>
            <div className="room-selector">
              <button 
                className="room-btn" 
                onClick={decrementRooms}
                disabled={numberOfRooms <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                value={numberOfRooms}
                onChange={handleRoomChange}
                min="1"
                max="50"
                className="room-input"
              />
              <button 
                className="room-btn" 
                onClick={incrementRooms}
                disabled={numberOfRooms >= 50}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="summary-row">
            <span>Booking ID:</span>
            <span>{bookingId}</span>
          </div>
          
          {/* Show calculation breakdown */}
          <div className="summary-row calculation">
            <span>Calculation:</span>
            <span>{numberOfRooms} room{numberOfRooms > 1 ? 's' : ''} × ₦{basePrice.toLocaleString()}</span>
          </div>
          
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>₦{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="payment-button">
          <button className="paystack-btn" onClick={payWithPaystack}>
            Pay ₦{totalAmount.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
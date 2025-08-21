// src/pages/Confirmation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Confirmation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract PayFast query params
  const paymentId = queryParams.get("pf_payment_id") || "N/A";
  const amount = queryParams.get("amount_gross") || "N/A";
  const status = queryParams.get("payment_status") || "Completed";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-red-600" size={80} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Thank you for your subscription. Below are your payment details:
        </p>

        {/* Payment Details Card */}
        <div className="bg-gray-50 border rounded-lg shadow-sm p-5 text-left mb-6">
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Payment Ref:</span> {paymentId}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Amount Paid:</span> R {amount}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-red-600 font-medium">{status}</span>
          </p>
        </div>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-red-600  text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Back to Home
        </Link>

        {/* Extra Note */}
        <p className="mt-6 text-sm text-red-600">
          A confirmation email will be sent to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;

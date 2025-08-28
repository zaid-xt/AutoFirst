import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Confirmation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const paymentId = queryParams.get("m_payment_id") || "";

  useEffect(() => {
    if (!paymentId) return;

    // Fetch payment details from backend
    fetch(`https://backend.autofirstmechanicalaid.co.za/api/payfast/payment/${paymentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPaymentDetails(data.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [paymentId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Fetching payment details...</p>
      </div>
    );
  }

  const amount = paymentDetails?.amount || "N/A";
  const status = paymentDetails?.status || "Pending";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-red-600" size={80} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment {status === "Completed" ? "Successful!" : "Pending"}
        </h1>

        <p className="text-gray-600 mb-6">
          {status === "Completed"
            ? "Thank you for your subscription. Below are your payment details:"
            : "We are still processing your payment. Please check your email shortly."}
        </p>

        <div className="bg-gray-50 border rounded-lg shadow-sm p-5 text-left mb-6">
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Payment Ref:</span> {paymentId || "N/A"}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Amount Paid:</span> R {amount}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`font-medium ${
                status === "Completed" ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {status}
            </span>
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Back to Home
        </Link>

        <p className="mt-6 text-sm text-red-600">
          A confirmation email will be sent to you shortly.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;

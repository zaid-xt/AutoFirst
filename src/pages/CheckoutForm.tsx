import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";

// ✅ Import Payment Logos
import PayFastLogo from "../images/assets/Payfast logo.svg";
import MasterCardLogo from "../images/assets/Master Card.svg";
import VisaLogo from "../images/assets/sid.svg";
import SecureIDLogo from "../images/assets/SCode_logoMark_grp.svg";
import InstantEft from "../images/assets/instantEFT_hi-Res_logo_svg.svg";
import Paygate from "../images/assets/PayGate-3D-Secure-Logo-Verified-by-Visa.png";

const CheckoutForm = () => {
  const { items, getTotalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Validate required fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.idNumber) {
      newErrors.idNumber = "ID number is required";
    } else if (!/^\d{13}$/.test(formData.idNumber)) {
      newErrors.idNumber = "ID number must be exactly 13 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.address) newErrors.address = "Address is required";

    if (!formData.city) newErrors.city = "City is required";

    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^\d{4}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Postal code must be exactly 4 digits";
    }

    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle PayFast recurring subscription
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/payfast/create-subscription",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items,
            customer: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
            },
            isSubscription: true,
          }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create subscription. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/cart" className="flex items-center text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>

          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-600 mb-8">
            Please provide your details to complete your subscription
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ✅ Checkout Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >
                <h2 className="text-xl font-bold mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {["firstName", "lastName", "idNumber", "email", "phone"].map(
                    (field) => (
                      <div key={field}>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          placeholder={
                            field
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase()) + " *"
                          }
                          value={formData[field as keyof typeof formData]}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                            errors[field] ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors[field] && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>

                <h2 className="text-xl font-bold mb-6">Address Information</h2>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Street Address *"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City *"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}

                    <input
                      type="text"
                      placeholder="Postal Code *"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.postalCode
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.postalCode && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="inline-flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="ml-2">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Privacy Policy
                      </Link>{" "}
                      *
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  {loading ? "Processing..." : "Start Subscription"}
                </button>

                {/* ✅ Payment Logos */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                  <img src={PayFastLogo} alt="PayFast" className="h-8" />
                  <img src={VisaLogo} alt="Visa" className="h-8" />
                  <img src={MasterCardLogo} alt="MasterCard" className="h-8" />
                  <img src={SecureIDLogo} alt="Secure ID" className="h-8" />
                  <img src={InstantEft} alt="Instant EFT" className="h-8" />
                  <img src={Paygate} alt="PayGate" className="h-8" />
                </div>

                {/* ✅ Compliance Notice */}
                <p className="text-center text-xs text-gray-500 mt-4">
                  Payments are processed securely via{" "}
                  <span className="font-semibold">PayFast</span>. We do not store
                  your credit card details. All transactions are encrypted and
                  3D Secure compliant.
                </p>
              </form>
            </div>

            {/* ✅ Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 sticky top-24 p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm mb-2"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      R{parseInt(item.price.replace("R", "")) * item.quantity}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>R{getTotalPrice()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

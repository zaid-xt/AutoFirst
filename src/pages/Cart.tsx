// import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">
              Browse our packages and add the perfect automotive care plan for your needs.
            </p>
            <Link
              to="/packages"
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
              <p className="text-gray-500">
                Review your selected packages before checkout
              </p>
            </div>
            <button
              onClick={clearCart}
              className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-1 text-gray-900">{item.name}</h2>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="flex gap-2 text-sm">
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                            Response: {item.responseTime}
                          </span>
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                            {item.supportLevel}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">Key Features:</h4>
                        <ul className="space-y-1">
                          {item.features.filter(f => f.included).slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-blue-600 mr-2 flex-shrink-0" />
                              {feature.feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-right md:text-left">
                        <div className="text-2xl font-bold text-blue-800 mb-2">
                          {item.price}<span className="text-base text-gray-500">{item.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">
                        R{parseInt(item.price.replace('R', '')) * item.quantity}
                        <span className="text-sm text-gray-500">{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} × {item.quantity}</span>
                        <span className="font-medium">R{parseInt(item.price.replace('R', '')) * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Monthly:</span>
                      <span className="text-blue-800">R{getTotalPrice()}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Billed monthly • Cancel anytime
                    </p>
                  </div>

                  <div className="space-y-3 mt-6">
                
<Link
  to="/checkout"
  className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
>
  Proceed to Checkout
</Link>
                    <Link
                      to="/packages"
                      className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium text-center transition-colors hover:bg-gray-50"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2 inline" />
                      Continue Shopping
                    </Link>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-200">
                    <div className="space-y-2 text-xs text-gray-500">
                      <p className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        30-day money-back guarantee
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Cancel or change plan anytime
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        24/7 customer support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
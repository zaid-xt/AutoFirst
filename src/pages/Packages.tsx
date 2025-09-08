import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Helmet } from "react-helmet-async";

const Packages = () => {
  const { addToCart } = useCart();

  const packages = [
    {
      id: 'gold',
      name: "Gold",
      price: "R999",
      period: "/month",
      icon: <Shield className="h-8 w-8" />,
      color: "red",
      popular: false,
      // responseTime: "60 min",
      supportLevel: "Standard Support",
      description: "Comprehensive coverage for essential vehicle components",
      features: [
        { feature: "Minor Servicing" },
        { feature: "Major Servicing" },
        { feature: "Towing Services" },
        { feature: "Tire Care and Replacements" },
        { feature: "Shock Absorbers" },
        { feature: "Clutch Plates" },
        { feature: "Break Disks" },
        { feature: "Brake Pads" },
        { feature: "Battery Replacements" },
        { feature: "CV Joint Replacements" },
        { feature: "Wheel Bearing" },
        { feature: "Alternator" },
        { feature: "Sealing Gaskets" },
        { feature: "Fuel Pump" },
        { feature: "Oil Pump" },
        { feature: "Starter Motors" },
        { feature: "General Diagnostics and Inspection" },
        { feature: "Motor Vehicle Disc Renewal" }
      ]
    },
    {
      id: 'moderate',
      name: "Moderate",
      price: "R699",
      period: "/month",
      icon: <Shield className="h-8 w-8" />,
      color: "red",
      popular: true,
      supportLevel: "Standard Support",
      description: "Comprehensive coverage for essential vehicle components",
      features: [
        { feature: "Minor Servicing", included: true },
        { feature: "Major Servicing" },
        { feature: "Towing Services" },
        { feature: "Tire Care and Replacements" },
        { feature: "Shock Absorbers" },
        { feature: "Disc Brakes" },
        { feature: "Break Pads" },
        { feature: "CV Joints" },
        { feature: "Battery Replacements" },
        { feature: "Wheel Bearings" },
        { feature: "Sealing Gaskets" },
        { feature: "Starter Motor" },
        { feature: "Fuel Pump" },
        { feature: "General Diagnostics and Inspection" },
        { feature: "Motor Vehicle Disc Renewal" }
      ]
    },
    {
      id: 'basic',
      name: "Basic",
      price: "R499",
      period: "/month",
      icon: <Shield className="h-8 w-8" />,
      color: "red",
      popular: false,
      supportLevel: "Premium Support",
      description: "Premium coverage with extensive component protection",
      features: [
        { feature: "Minor Servicing" },
        { feature: "Tire Care and Replacements" },
        { feature: "Brake Pads" },
        { feature: "Disc Brakes" },
        { feature: "Battery Replacements" },
        { feature: "Wheel Bearings" },
        { feature: "General Diagnostics and Inspection" },
        { feature: "Motor Vehicle Disc Renewal" }
      ]
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    const colors = {
      red: {
        bg: popular ? 'bg-red-600' : 'bg-red-600',
        text: 'text-red-600',
        border: 'border-red-600',
        button: 'bg-red-600 hover:bg-red-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-16">
       {/* SEO Meta Tags */}
    <Helmet>
      <title>Auto First Packages | Mechanical Aid & Vehicle Protection</title>
      <meta
        name="description"
        content="Explore Auto First's mechanical aid packages for comprehensive vehicle protection. Choose Gold, Moderate, or Basic coverage tailored for your vehicle."
      />
      <meta
        name="keywords"
        content="Auto First packages, vehicle protection, mechanical aid, roadside assistance, Gold package, Moderate package, Basic package, car maintenance South Africa"
      />
      <link rel="canonical" href="https://autofirst.co.za/packages" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Auto First Packages | Mechanical Aid & Vehicle Protection" />
      <meta
        property="og:description"
        content="Choose the right mechanical aid package for your vehicle. Gold, Moderate, or Basic coverage for peace of mind on the road."
      />
      <meta property="og:image" content="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg" />
      <meta property="og:url" content="https://autofirst.co.za/packages" />
      <meta property="og:type" content="website" />
    </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your Mechanical Aid Package
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive protection plans for your vehicle's mechanical components
          </p>
        </div>
      </section>

      {/* Packages Grid - Modified width here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"> {/* Removed max-w-4xl constraint */}
            {packages.map((pkg, index) => {
              const colors = getColorClasses(pkg.color, pkg.popular);
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col ${
                    pkg.popular ? 'border-4 border-red-500 relative' : 'border border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8 flex-grow">
                    <div className={`${colors.bg} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white`}>
                      {pkg.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                      {pkg.name}
                    </h3>
                    
                    <div className="text-center mb-8">
                      <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600 text-lg">{pkg.period}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className={`h-5 w-5 ${colors.text} mt-1 mr-3 flex-shrink-0`} />
                          <span className="text-gray-700">{feature.feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6">
                    <button
                      onClick={() => addToCart({
                        id: pkg.id,
                        name: pkg.name,
                        price: pkg.price,
                        period: pkg.period,
                        responseTime: pkg.responseTime,
                        supportLevel: pkg.supportLevel,
                        description: pkg.description,
                        features: pkg.features.map(f => ({ feature: f.feature, included: f.included }))
                      })}
                      className={`w-full ${colors.button} text-white py-4 px-6 rounded-lg 
                      font-semibold text-center transition-colors duration-300 block hover:shadow-lg`}
                    >
                      Select {pkg.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compare Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed comparison to help you choose the right protection
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-xl rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Golden
                    </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-red-50">
                    Moderate
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Basic
                  </th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">R999</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900 bg-red-50">R699</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">R499</td>
                </tr>
                {/* <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Payout Limit</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">R13,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900 bg-orange-50">R20,000</td>
                </tr> */}
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Roadside Towing</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 bg-red-50">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Major Vehicle Maintenance</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 bg-red-50">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Fuel (10L)</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 bg-red-50">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Alternator Coverage</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 bg-red-50">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Pumps Coverage</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 bg-red-50">✓</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When does coverage begin?</h3>
              <p className="text-gray-600">
                Your Auto-First Mechanical Aid services commence immediately upon your initial premium payment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Are pre-existing conditions covered?</h3>
              <p className="text-gray-600">
                Pre-existing component failures will only be covered after your third premium has been accepted by our administrator.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can I transfer my coverage?</h3>
              <p className="text-gray-600">
                If you sell your vehicle privately, the balance of your Mechanical Aid can be transferred to the new owner, subject to approval.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What about aftermarket parts?</h3>
              <p className="text-gray-600">
                We will not cover aftermarket components, but will cover damage to original components caused by aftermarket parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of vehicle owners who trust Auto-First for comprehensive mechanical protection
          </p>
          <Link
            to="/cart"
            className="bg-[#b91c1c] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
          >
            View Your Cart
            <Zap className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Packages;
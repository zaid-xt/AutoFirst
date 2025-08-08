import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Packages = () => {
  const { addToCart } = useCart();

  const packages = [
    {
      id: 'basic',
      name: "Basic",
      price: "R199",
      period: "/month",
      icon: <Shield className="h-8 w-8" />,
      color: "red",
      popular: false,
      responseTime: "60 min",
      supportLevel: "Standard Support",
      description: "Essential roadside assistance for basic needs",
      features: [
        { feature: "24/7 Emergency Hotline", included: true },
        { feature: "Basic Roadside Assistance", included: true },
        { feature: "Jump Start Service", included: true },
        { feature: "Flat Tire Change", included: true },
        { feature: "Emergency Fuel Delivery (5L)", included: true },
        { feature: "Lockout Assistance", included: true },
        { feature: "Up to 2 Callouts per Month", included: true },
        { feature: "50km Towing Distance", included: true }
      ]
    },
    {
      id: 'premium',
      name: "Premium",
      price: "R549",
      period: "/month",
      icon: <Crown className="h-8 w-8" />,
      color: "red",
      popular: true,
      responseTime: "20 min",
      supportLevel: "VIP Support",
      description: "Comprehensive coverage with premium benefits",
      features: [
        { feature: "Everything in Basic", included: true },
        { feature: "Express Response (20 min)", included: true },
        { feature: "Comprehensive Repairs", included: true },
        { feature: "Alternative Transport", included: true },
        { feature: "Accommodation Coverage", included: true },
        { feature: "Emergency Fuel Delivery (20L)", included: true },
        { feature: "Unlimited Callouts", included: true },
        { feature: "200km Towing Distance", included: true },
        { feature: "Dedicated Account Manager", included: true },
        { feature: "Annual Vehicle Inspection", included: true }
      ]
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    const colors = {
      red: {
        bg: popular ? 'bg-red-600' : 'bg-red-700',
        text: 'text-red-600',
        border: 'border-red-600',
        button: 'bg-red-600 hover:bg-red-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your Package
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Flexible plans designed to meet your specific needs and budget
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => {
              const colors = getColorClasses(pkg.color, pkg.popular);
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
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
                  
                  <div className="p-8">
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
              Detailed comparison to help you choose the right package
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-xl rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">R199</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">R549</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Response Time</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">60 min</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">20 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Callouts</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Towing Distance</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">50km</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">200km</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">On-Site Repairs</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">Basic</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">Comprehensive</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Alternative Transport</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Accommodation Coverage</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">✗</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600">✓</td>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can I upgrade my package?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your package at any time. The new benefits take effect immediately, 
                and you'll only pay the difference for the remaining billing period.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens if I exceed callouts?</h3>
              <p className="text-gray-600">
                For Basic package, additional callouts are charged at R150 per service. 
                Premium package includes unlimited callouts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is there a contract period?</h3>
              <p className="text-gray-600">
                No long-term contracts required. All packages are month-to-month with 30 days notice 
                for cancellation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Are multiple vehicles covered?</h3>
              <p className="text-gray-600">
                Each package covers one primary vehicle. Additional vehicles can be added for 50% 
                of the package price per vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Auto First for their vehicle needs
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
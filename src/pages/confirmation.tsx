import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Banknote, Lock } from 'lucide-react';

const banks = [
  {
    name: 'FNB',
    logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FhiJxhxi_first-national-bank-south-africa-hd-png-download%2F&psig=AOvVaw2Cus8UVRHkJp2oe7NZliVp&ust=1754386941035000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiNvObu8I4DFQAAAAAdAAAAABAE'
  },
  {
    name: 'Capitec',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Capitec_0.png'
  },
  {
    name: 'Standard Bank',
    logo: 'https://www.pngkey.com/png/detail/223-2237503_standard-bank-standard-bank-logo-png.png'
  },
  {
    name: 'ABSA',
    logo: 'https://seeklogo.com/images/A/absa-logo-2C3AD46D1A-seeklogo.com.png'
  },
  {
    name: 'Nedbank',
    logo: 'https://seeklogo.com/images/N/nedbank-logo-4E22C9A42B-seeklogo.com.png'
  },
];



const Confirmation = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate a successful payment and redirect
    setTimeout(() => {
      alert('Payment successful!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <div className="text-center mb-8">
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">Confirm Your Payment</h1>
            <p className="text-gray-600 mt-2">Choose your bank and complete your payment securely</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Reference:</span>
              <span className="font-mono font-semibold text-blue-800">RNTL-{Date.now().toString().slice(-6)}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
              <span>Amount:</span>
              <span className="font-semibold">R{localStorage.getItem('lastTotal') || 'N/A'}</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Select your bank:</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
              {banks.map((bank) => (
                <button
                  key={bank.name}
                  className="bg-white border hover:border-blue-500 rounded-lg p-2 flex items-center justify-center shadow-sm transition duration-150 ease-in-out"
                >
                  <img src={bank.logo} alt={bank.name} className="h-10 object-contain" />
                </button>
              ))}
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold flex justify-center items-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Proceed to Secure Payment
            </button>

            <p className="text-xs text-center text-gray-400 mt-3">
              Powered by Ozow • Instant EFT • 256-bit SSL Encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

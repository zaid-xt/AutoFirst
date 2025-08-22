import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-900 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-12 max-w-xl text-center shadow-xl">
        <h1 className="text-5xl font-bold mb-6 text-red-800">Thank You!</h1>
        <p className="text-xl mb-8 text-red-700">
          Your message has been sent successfully. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;

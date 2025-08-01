import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I need help with my vehicle");
    const phoneNumber = "27123456789"; // Replace with actual WhatsApp Business number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
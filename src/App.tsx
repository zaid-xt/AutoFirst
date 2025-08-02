import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import BookService from './pages/BookService';
import Contact from './pages/Contact';
import Cart from './pages/Cart'; // Import the Cart component
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider
import CheckoutForm from './pages/CheckoutForm';


function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/book" element={<BookService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} /> {/* Add cart route */}
              <Route path="/checkout" element={<CheckoutForm />} />
              
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
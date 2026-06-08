import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Scanner from './pages/Scanner';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
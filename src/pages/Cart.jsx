import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="empty-cart">🧺 Votre panier est vide.</p>;
  }

  return (
    <div className="cart">
      <h2>Panier vétérinaire</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            <strong>{item.name}</strong> – {item.dosage}
            <br />
            Quantité : {item.quantity}
          </div>
          <button onClick={() => removeFromCart(item.id)}>🗑️ Retirer</button>
        </div>
      ))}
      <button className="clear-cart" onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default Cart;
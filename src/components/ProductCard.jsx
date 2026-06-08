import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product, showAddButton = true }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="dosage"><strong>Dosage :</strong> {product.dosage}</p>
      {product.barcode && <small>Code : {product.barcode}</small>}
      {showAddButton && (
        <button onClick={() => addToCart(product)}>➕ Ajouter au panier</button>
      )}
    </div>
  );
};

export default ProductCard;
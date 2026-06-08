import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-senevet.jpeg';
import products from '../data/products';
import QRCode from 'react-qr-code';

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        background: '#f5f7f6',
        minHeight: '100vh',
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: '#0f5132',
          color: 'white',
          padding: '15px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="SENEVET"
          style={{
            height: '60px',
            width: 'auto',
          }}
        />

        <nav
          style={{
            display: 'flex',
            gap: '25px',
          }}
        >
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Accueil
          </Link>

          <Link
            to="/products"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Produits
          </Link>

          <Link
            to="/scanner"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Scanner
          </Link>

          <Link
            to="/contact"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* TITRE */}
      <h1
        style={{
          textAlign: 'center',
          color: '#0f5132',
          padding: '30px',
          margin: 0,
        }}
      >
        Nos Produits Vétérinaires
      </h1>

      {/* LISTE PRODUITS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))',
          gap: '30px',
          padding: '30px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: '#fff',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '20px' }}>
              <h2
                style={{
                  color: '#198754',
                  marginBottom: '10px',
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: '#666',
                }}
              >
                {product.description}
              </p>

              <p>
                <strong>Catégorie :</strong>{' '}
                {product.category}
              </p>

              <p>
                <strong>Indication :</strong>
                <br />
                {product.indication}
              </p>

              <p>
                <strong>Posologie :</strong>
                <br />
                {product.posologie}
              </p>

              <p>
                <strong>Composition :</strong>
                <br />
                {product.composition}
              </p>

              {/* QR CODE */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <QRCode
                  value={product.barcode}
                  size={120}
                />
              </div>

              {/* BOUTON */}
              <button
                onClick={() => addToCart(product)}
                style={{
                  background: '#198754',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
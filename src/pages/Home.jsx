import { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { getProductByBarcode } from '../services/api';
import logo from '../assets/logo-senevet.jpeg';
import { Link } from 'react-router-dom';
import products from '../data/products';


const Home = () => {
  const [scannedProduct, setScannedProduct] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [scanError, setScanError] = useState('');

  const handleScan = async (barcode) => {
    try {
      const res = await getProductByBarcode(barcode);
      setScannedProduct(res.data);
      setScanError('');
    } catch (err) {
      setScannedProduct(null);
      setScanError('Produit non trouvé');
    }
  };

  return (
    <div style={{ background: '#f5f7f5', minHeight: '100vh' }}>

      {/* HEADER */}
      <header
        style={{
          background: '#0f5132',
          color: 'white',
          padding: '15px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={logo}
            alt="VetScan Pro"
            style={{
              height: '60px',
              width: 'auto'
            }}
          />
        </div>

        <nav style={{ display: 'flex', gap: '25px' }}>
  <Link
    to="/"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    Accueil
  </Link>

  <Link
    to="/products"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    Produits
  </Link>

  <Link
    to="/scanner"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    Scanner
  </Link>

  <Link
    to="/contact"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    Contact
  </Link>

  <Link
    to="/cart"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    
  </Link>
</nav>
      </header>

      {/* HERO */}
      <section
        style={{
          background: '#ffffff',
          color: 'white',
          textAlign: 'center',
          padding: '70px 20px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '15px',
          }}
        >
          Produits vétérinaires de qualité
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
          }}
        >
          Recherchez ou scannez vos médicaments vétérinaires
        </p>

        <button
          style={{
            background: '#0f5132',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Voir les produits
        </button>
      </section>

      {/* RECHERCHE */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '30px auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ color: '#0f5132' }}>
            🔍 Rechercher un produit
          </h2>

          <SearchBar onResults={setSearchResults} />
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '30px auto',
          padding: '0 20px',
        }}
      >
        <h2
          style={{
            color: '#0f5132',
            marginBottom: '20px',
          }}
        >
          Catégories
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(180px,1fr))',
            gap: '15px',
          }}
        >
          {[
            '💉 Vaccins',
            '💊 Antibiotiques',
            '🦠 Vermifuges',
            '🌿 Vitamines',
            '🐄 Bovins',
            '🐐 Ovins',
            '🐕 Chiens',
            '🐈 Chats',
          ].map((cat, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#0f5132',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUITS POPULAIRES */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '0 20px',
        }}
      >
        <h2
          style={{
            color: '#0f5132',
            marginBottom: '20px',
          }}
        >
          ⭐ Produits populaires
        </h2>

        <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: '20px',
  }}
>
  {products.map((product) => (
    <div
      key={product.id}
      style={{
        background: '#fff',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
        }}
      />

      <div style={{ padding: '15px' }}>
        <h3 style={{ color: '#198754' }}>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            background: '#198754',
            color: '#fff',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            width: '100%',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* RESULTATS RECHERCHE */}
      {searchResults.length > 0 && (
        <section
          style={{
            maxWidth: '1200px',
            margin: '40px auto',
            padding: '0 20px',
          }}
        >
          <h2 style={{ color: '#0f5132' }}>
            Résultats de recherche
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(300px,1fr))',
              gap: '20px',
            }}
          >
            {searchResults.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>
      )}

      {/* SCANNER */}
      <section
        style={{
          maxWidth: '900px',
          margin: '50px auto',
          padding: '20px',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
        >
          <h2
            style={{
              color: '#0f5132',
              textAlign: 'center',
            }}
          >
            📷 Scanner un produit
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <BarcodeScanner onDetected={handleScan} />
          </div>

          {scanError && (
            <p
              style={{
                textAlign: 'center',
                color: 'red',
                marginTop: '15px',
              }}
            >
              {scanError}
            </p>
          )}

          {scannedProduct && (
            <div style={{ marginTop: '20px' }}>
              <ProductCard product={scannedProduct} />
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Home;
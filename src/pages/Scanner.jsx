import { useState } from "react";
import BarcodeScanner from "../components/BarcodeScanner";
import products from "../data/products";
import logo from '../assets/logo-senevet.jpeg';

const Scanner = () => {
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  const handleScan = (code) => {
    const found = products.find(
      (p) => p.barcode === code
    );

    if (found) {
      setProduct(found);
      setMessage("");
    } else {
      setProduct(null);
      setMessage("Produit non trouvé");
    }
  };

  return (
    
    <div style={{ padding: "40px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#198754",
        }}
      >
        Scanner un produit
      </h1>

      <BarcodeScanner onDetected={handleScan} />

      {message && (
        <p style={{ color: "red" }}>
          {message}
        </p>
      )}

      {product && (
        <div
          style={{
            marginTop: "30px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "250px",
            }}
          />

          <h2>{product.name}</h2>

          <p>
            <strong>Description :</strong>{" "}
            {product.description}
          </p>

          <p>
            <strong>Indication :</strong>{" "}
            {product.indication}
          </p>

          <p>
            <strong>Posologie :</strong>{" "}
            {product.posologie}
          </p>

          <p>
            <strong>Composition :</strong>{" "}
            {product.composition}
          </p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
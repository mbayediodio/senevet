import products from "../data/products";

export const searchProducts = async (query) => {
  return {
    data: products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    ),
  };
};

export const getProductByBarcode = async (barcode) => {
  const product = products.find(
    (p) => String(p.barcode) === String(barcode)
  );

  if (!product) {
    throw new Error("Produit non trouvé");
  }

  return {
    data: product,
  };
};
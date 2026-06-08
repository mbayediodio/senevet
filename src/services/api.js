import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const searchProducts = (query) => api.get(`/products/search?q=${query}`);
export const getProductByBarcode = (barcode) => api.get(`/products/barcode/${barcode}`);
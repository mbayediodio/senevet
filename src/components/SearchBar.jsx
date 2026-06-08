import { useState } from 'react';
import { searchProducts } from '../services/api';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await searchProducts(query);
      onResults(res.data);
    } catch (error) {
      console.error(error);
      onResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Nom ou code-barres..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Recherche...' : 'Chercher'}
      </button>
    </div>
  );
};

export default SearchBar;
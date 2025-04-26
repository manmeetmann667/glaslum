import React, { useEffect, useState } from 'react';
import { products } from '../data/products';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { revealElements } from '../utils/animations';
import { Product } from '../types';

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['all', ...new Set(products.map((product) => product.category))];

  useEffect(() => {
    document.title = 'Products | Glaslum Industries';
    const cleanupReveal = revealElements();
    return () => {
      cleanupReveal();
    };
  }, []);

  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedSearch) ||
          product.description.toLowerCase().includes(lowercasedSearch)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);

  return (
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our Premium <span className="text-amber-500">Aluminum Solutions</span> Collections
            </h1>
            <p className="text-xl text-stone-300">
              Explore our innovative aluminum windows, doors, and office solutions, engineered for durability, energy efficiency, and timeless style, tailored to elevate any space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-950/80">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3 reveal">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 pl-12 pr-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-wrap gap-3 justify-center lg:justify-end reveal">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-stone-950'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="reveal group relative overflow-hidden rounded-lg shadow-md bg-stone-800 cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-stone-100 mb-2">{product.name}</h3>
                    <p className="text-sm text-stone-400">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 reveal">
              <h3 className="text-xl font-medium text-stone-300 mb-2">No products found</h3>
              <p className="text-stone-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-stone-900/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Need a <span className="text-amber-500">Custom Solution?</span>
            </h2>
            <p className="text-lg text-stone-300 mb-8">
              Our expert team at Glaslum Industries can design bespoke aluminum window, door, and office solutions, crafted to your precise specifications for unparalleled performance and style.
            </p>
            <Link to="/services" className="btn-primary">
              Request Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Modal inside the same file */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-stone-950/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-stone-900/95 to-stone-950/95 max-w-md w-full mx-4 rounded-lg shadow-2xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-200 hover:text-amber-500 transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-40 object-cover object-center rounded-lg mb-4"
              />
              <div className="mb-2 text-amber-500 text-sm font-medium uppercase tracking-wider">
                {selectedProduct.category}
              </div>
              <h2 className="text-xl font-serif font-medium text-stone-50 mb-2">
                {selectedProduct.name}
              </h2>
              <div className="text-stone-300 mb-4">
                <p>{selectedProduct.description}</p>
                {selectedProduct.benefits.length > 0 && (
                  <>
                    <h3 className="text-md font-medium text-stone-50 mt-4 mb-2">Key Benefits</h3>
                    <ul className="list-disc pl-5">
                      {selectedProduct.benefits.map((benefit, index) => (
                        <li key={index} className="mb-1">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="btn-primary flex items-center justify-center w-full text-stone-950 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;

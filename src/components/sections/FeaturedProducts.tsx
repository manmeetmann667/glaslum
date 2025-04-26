import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Debugging logs
  console.log('FeaturedProducts: products received:', products);
  console.log('FeaturedProducts: featured products:', featuredProducts);
  console.log('FeaturedProducts: selected product:', selectedProduct);

  return (
    <section style={{ padding: '96px 0', backgroundColor: 'rgba(28, 25, 23, 0.8)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>
          <div style={{ maxWidth: '672px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#fff' }}>
              Featured Collections
            </h2>
            <p style={{ color: '#d6d3d1', maxWidth: '672px' }}>
              Discover our most sought-after window designs, crafted with exceptional materials and unparalleled attention to detail.
            </p>
          </div>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#d97706',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            View All Products
            <ArrowRight style={{ marginLeft: '8px' }} size={18} />
          </Link>
        </div>

        {featuredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#fff' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px' }}>
              No featured products available
            </h3>
            <p style={{ color: '#a8a29e' }}>
              Check back later for our featured collections!
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#292524',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                onClick={() => {
                  console.log('Card clicked:', product.name);
                  setSelectedProduct(product);
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: '100%', height: '256px', objectFit: 'cover' }}
                />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#f5f5f4', marginBottom: '8px' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#a8a29e' }}>
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedProduct && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(28, 25, 23, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(to bottom, rgba(28, 25, 23, 0.95), rgba(28, 25, 23, 0.95))',
                maxWidth: '400px', // Smaller width
                width: '100%',
                maxHeight: '80vh', // Limit height to 80% of viewport
                margin: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden', // Prevent content overflow
              }}
            >
              <button
                onClick={() => {
                  console.log('Modal closed');
                  setSelectedProduct(null);
                }}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  color: '#e7e5e4',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
              <div
                style={{
                  padding: '24px',
                  overflowY: 'auto', // Enable vertical scrolling
                  maxHeight: '80vh', // Ensure content stays within modal height
                }}
              >
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  style={{
                    width: '100%',
                    height: '160px', // Smaller image height
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                  }}
                />
                <div
                  style={{
                    color: '#d97706',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {selectedProduct.category}
                </div>
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    color: '#f5f5f4',
                    marginBottom: '12px',
                  }}
                >
                  {selectedProduct.name}
                </h2>
                <div style={{ color: '#d6d3d1', marginBottom: '16px' }}>
                  <p>{selectedProduct.description}</p>
                  {selectedProduct.benefits.length > 0 && (
                    <>
                      <h3
                        style={{
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#f5f5f4',
                          margin: '12px 0 8px',
                        }}
                      >
                        Key Benefits
                      </h3>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {selectedProduct.benefits.map((benefit, index) => (
                          <li key={index} style={{ marginBottom: '4px' }}>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <button
                  onClick={() => {
                    console.log('Modal closed via button');
                    setSelectedProduct(null);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#d97706',
                    color: '#000',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
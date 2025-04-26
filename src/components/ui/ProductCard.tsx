import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-stone-950/80 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-stone-900/95 to-stone-950/95 max-w-2xl w-full mx-4 rounded-lg shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-200 hover:text-amber-500 transition-colors duration-300"
        >
          <X size={24} />
        </button>
        <div className="p-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover object-center rounded-lg mb-6"
          />
          <div className="mb-4 text-amber-500 text-sm font-medium uppercase tracking-wider">
            {product.category}
          </div>
          <h2 className="text-2xl font-serif font-medium text-stone-50 mb-4">
            {product.name}
          </h2>
          <div className="text-stone-300 mb-6">
            <p>{product.description}</p>
            {product.benefits.length > 0 && (
              <>
                <h3 className="text-lg font-medium text-stone-50 mt-4 mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="mb-1">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="btn-primary flex items-center justify-center w-full text-stone-950 bg-amber-500 hover:bg-amber-600 transition-colors duration-300 py-3"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-container max-w-xl">
        {/* Modal content */}
        <div className="bg-white rounded-lg p-4">
          <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
          <img
            src={`/images/${product.images[0]}`}
            alt={product.title}
            className="h-auto w-full"
          />
          <p className="mt-4">{product.description}</p>
          <p className="mt-2 text-lg font-semibold">${product.price}</p>
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 mt-4 rounded px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

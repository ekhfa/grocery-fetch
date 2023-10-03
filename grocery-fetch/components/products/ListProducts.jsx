import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";

const ListProducts = ({ data }) => {
  const [products, setProducts] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Use useEffect to update products when data changes
  useEffect(() => {
    setProducts(data);
  }, [data]);

  const openProductModal = product => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-12">
      <div className="max-w-screen-xl container mx-auto px-4">
        <div className="md:flex-row -mx-4 flex flex-wrap">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 w-full px-4"
              onClick={() => openProductModal(product)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/images/${product.images[0]}`}
                  alt={product.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="mt-2 text-lg font-semibold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </section>
  );
};

export default ListProducts;

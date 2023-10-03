"use client";

import React from "react";
import Filters from "./layouts/Filter";

const ListProducts = () => {
  //console.log(data);
  return (
    <section className="py-12">
      <div className="max-w-screen-xl container mx-auto px-4">
        <div className="md:flex-row -mx-4 flex flex-col">
          <Filters />

          <main className="md:w-2/3 lg:w-3/4 px-3">
            {data?.products?.map(product => (
              <ProductItem key={product?._id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;

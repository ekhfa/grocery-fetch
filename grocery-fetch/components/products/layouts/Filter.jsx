"use client";

import React from "react";
import StarRatings from "react-star-ratings";

const Filters = () => {
  let queryParams;

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <a
        className="md:hidden text-gray-700  bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-600 mb-5 inline-block w-full rounded-md border px-4 py-2 text-center text-lg shadow-sm"
        href="#"
      >
        Filter by
      </a>
      <div className="md:block border-gray-200 bg-white hidden rounded border px-6 py-4 shadow-sm">
        <h3 className="mb-2 font-semibold">Price ($)</h3>
        <div className="md:grid-cols-3 grid gap-x-2">
          <div className="mb-4">
            <input
              name="min"
              className="border-gray-200 bg-gray-100 hover:border-gray-400 focus:border-gray-400 w-full appearance-none rounded-md border px-3 py-2 focus:outline-none"
              type="number"
              placeholder="Min"
            />
          </div>

          <div className="mb-4">
            <input
              name="max"
              className="border-gray-200 bg-gray-100 hover:border-gray-400 focus:border-gray-400 w-full appearance-none rounded-md border px-3 py-2 focus:outline-none"
              type="number"
              placeholder="Max"
            />
          </div>

          <div className="mb-4">
            <button className="text-white bg-blue-600 border-transparent hover:bg-blue-700 inline-block w-full rounded-md border px-1 py-2 text-center">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="md:block border-gray-200 bg-white hidden rounded border px-6 py-4 shadow-sm">
        <h3 className="mb-2 font-semibold">Category</h3>

        <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Electronics"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Electronics")}
              />
              <span className="text-gray-500 ml-2"> Electronics </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Laptops"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Laptops")}
              />
              <span className="text-gray-500 ml-2"> Laptops </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Toys"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Toys")}
              />
              <span className="text-gray-500 ml-2"> Toys </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Office"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Office")}
              />
              <span className="text-gray-500 ml-2"> Office </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Beauty"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Beauty")}
              />
              <span className="text-gray-500 ml-2"> Beauty </span>
            </label>
          </li>
        </ul>

        <hr className="my-4" />

        <h3 className="mb-2 font-semibold">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map(rating => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                />
                <span className="text-gray-500 ml-2">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;

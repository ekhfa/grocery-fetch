import React from "react";

const Search = () => {
  return (
    <form className="md:order-none md:mt-0 md:w-2/4 lg:w-2/4 order-last mt-5 flex w-full flex-nowrap items-center">
      <input
        className="border-gray-200 bg-gray-100 hover:border-gray-400 focus:border-gray-400 mr-5 flex-grow appearance-none rounded-md border px-3 py-2 focus:outline-none"
        type="text"
        placeholder="Enter your keyword"
        required
      />
      <button
        type="button"
        className="text-white border-transparent bg-blue-600 text-white hover:bg-blue-700 inline-block rounded-md border px-4 py-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

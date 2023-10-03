import React from "react";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-white border-b py-2">
      <div className="max-w-screen-xl container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="mr-5 flex-shrink-0">
            <a
              href="/"
              className="text-black hover:text-gray-800 text-2xl font-bold"
            >
              Grocery Fetch
            </a>
          </div>
          <Search />

          <div className="ml-auto flex items-center space-x-2">
            <Link
              href="/cart"
              className="text-white bg-green-500 border-gray-200 hover:bg-green-600 hover:border-green-600 inline-block rounded-md border px-3 py-2 text-center shadow-sm"
            >
              <i className="text-gray-400 fa fa-shopping-cart w-5"></i>
              <span className="lg:inline ml-1 hidden">
                Cart (<b>0</b>)
              </span>
            </Link>
            <Link
              href="/login"
              className="text-white bg-green-500 border-gray-200 hover:bg-green-600 hover:border-green-600 inline-block rounded-md border px-3 py-2 text-center shadow-sm"
            >
              <i className="text-gray-400 fa fa-user w-5"></i>
              <span className="lg:inline ml-1 hidden">Sign In</span>
            </Link>
            <Link href="/me">
              <div className="mb-4 mt-4 flex cursor-pointer items-center space-x-3">
                <img
                  className="h-20 w-20 rounded-full"
                  src={"/login.jpg"}
                  alt="User"
                />
                <div>
                  <p className="font-medium">Ekhfa</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ekhfa@example.com
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-green-500 text-black hover:bg-green-600 hover:text-gray-800 border-transparent inline-flex items-center rounded-md border p-3"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

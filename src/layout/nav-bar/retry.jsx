import React, { Children, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const nmbr = [
        {
          id: 1,
          value: Men,
        },
        {
          id: 2,
          value: Women,
        },
        {
          id: 3,
          value: Children,
        },
        {
          id: 4,
          value: Winter_Collection,
        },
        {
          id: 5,
          value: Summer_Collection,
        },
      ];

  };
  return (
    <div>
      <nav
        class=" border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-900"
        style={{ backgroundColor: " bisque" }}
      >
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" class="flex items-center">
            <img
              src="../cart.png"
              class="h-8 mr-3 sm:h-9"
              alt="Flowbite Logo"
              style={{ width: 80, height: 80 }}
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              My Store
            </span>
          </Link>
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
            style={{ backgroundColor: " bisque" }}
          >
            <ul class="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  -800  ">
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Children
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Winter Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Summer Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";
const SummerCollection = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:4000/summer-collection");
    console.log(data);
    return data;
  };

  const { status, data, error, isFetching, isLoading, refetch } = useQuery(
    "Products",
    getProducts,
    {
      enabled: true, //agr false karty hai to 1st time func khud nai chaly ga
    }
  );
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleFilter = () => {
    filter ? setFilter(false) : setFilter(true);
  };

  const filterChange = (e) => {
    const { value, checked } = e.target;
    let arr = [];
    arr = categories;
    if (checked) {
      arr.push(value);
      setCategories(arr);
    } else {
      const index = arr.indexOf(value);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }

      setCategories(arr);
    }
    refetch();
    console.log("cats", categories);
  };
  return (
    <>
      <div>
        <button
          id="dropdownBgHoverButton"
          data-dropdown-toggle="dropdownBgHover"
          className="text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => handleFilter()}
        >
          Filter
          <svg
            className="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownBgHover"
          className={`${
            filter ? "" : "hidden"
          } z-10 w-48 bg-white rounded shadow dark:bg-gray-700`}
        >
          <ul
            style={{
              position: "absolute",
              background: "white",
              border: "1px solid",
            }}
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownBgHoverButton"
          >
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  defaultValue="mens-watches"
                  onChange={(e) => filterChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-4"
                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Watches
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-5"
                  type="checkbox"
                  defaultValue="mens-shoes"
                  onChange={(e) => filterChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-5"
                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Shoes
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-6"
                  type="checkbox"
                  defaultValue="mens-shirts"
                  onChange={(e) => filterChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-6"
                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Shirts
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {isLoading || isFetching ? (
          <p>Loading...</p>
        ) : (
          data?.map((product) => {
            return categories.includes(product.category) ||
              categories.length === 0 ? (
              <div
                key={product.id}
                className="w-full shadow bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="p-8 rounded-t-lg"
                  src={product.images[0]}
                  alt="product image"
                />
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $ {product.price}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(cartSlice.actions.addToCart(product))
                      }
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })
        )}
      </div>
    </>
  );
};

export default SummerCollection;

import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/Slice/add-to-cart";
import { products } from "./data.js";
const SummerCollection = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:4000/summer-collection");
    console.log(data);
    return data;
  };

  const { status, data, error, isFetching, isLoading, refetch } = useQuery("Products", getProducts, {
    enabled: true, //agr false karty hai to 1st time func khud nai chaly ga
  });
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
          id='dropdownBgHoverButton'
          data-dropdown-toggle='dropdownBgHover'
          className='text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
          onClick={() => handleFilter()}
        >
          Filter
          <svg
            className='ml-2 w-4 h-4'
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id='dropdownBgHover'
          className={`${filter ? "" : "hidden"} z-10 w-48 bg-white rounded shadow dark:bg-gray-700`}
        >
          <ul
            style={{
              position: "absolute",
              background: "white",
              border: "1px solid",
              zIndex: 10,
            }}
            className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownBgHoverButton'
          >
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-4'
                  type='checkbox'
                  defaultValue='mens-watches'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-4'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Watches
                </label>
              </div>
            </li>
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-5'
                  type='checkbox'
                  defaultValue='mens-shoes'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-5'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Shoes
                </label>
              </div>
            </li>
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-6'
                  type='checkbox'
                  defaultValue='mens-shirts'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-6'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Shirts
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <div className='bg-white'>
          <div className='mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 class='text-center text-4xl mb-10 font-bold text-slate-900'>Summer Collection</h1>
            <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
              {data?.map((product) => {
                return categories.includes(product.category) || categories.length === 0 ? (
                  <div
                    key={product.id}
                    className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
                  >
                    <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                      />
                    </div>
                    <div className='flex flex-1 flex-col space-y-2 p-4'>
                      <h3 className='text-md font-bold text-gray-900'>
                        <span aria-hidden='true' />
                        {product.title}
                      </h3>
                      <p className='text-sm text-gray-500'> {product.description}</p>
                      <div className='flex items-center justify-between'>
                        <p className='text-base font-bold  text-gray-900'>$ {product.price}</p>
                        <button
                          onClick={() => dispatch(cartSlice.actions.addToCart(product))}
                          className='cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SummerCollection;

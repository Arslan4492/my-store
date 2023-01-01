import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";

const WinterCollection = () => {
  const dispatch = useDispatch();
  const { data, isFetching, isLoading } = useQuery("winter", () =>
    axios.get("https://dummyjson.com/products/category/mens-shirts").then((res) => res)
  );

  return (
    <div className='container grid grid-cols-3'>
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        data?.data?.products?.map((product) => {
          return (
            <div className='w-full shadow max-w-sm bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700'>
              <a href=''>
                <img className='p-8 rounded-t-lg' src={product.images[0]} alt='product image' />
              </a>
              <div className='px-5 pb-5'>
                <a href=''>
                  <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                    {product.title}
                  </h5>
                </a>
                <div className='flex items-center mt-2.5 mb-5'></div>
                <div className='flex items-center justify-between'>
                  <span className='text-3xl font-bold text-gray-900 dark:text-white'>$ {product.price}</span>
                  <button
                    onClick={() => dispatch(cartSlice.actions.addToCart(product))}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WinterCollection;

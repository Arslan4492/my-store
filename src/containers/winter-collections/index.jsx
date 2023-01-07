import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";
const WinterCollection = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("winterCollection", () =>
    axios.get(" http://localhost:4000/winterCollection").then((res) => res)
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <section className='text-gray-600 body-font'>
      <div className='px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <div className='w-full p-4 grid grid-cols-3 gap-5'>
            {data.data.map((winterData) => (
              <div
                key={winterData.id}
                className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
              >
                <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                  <img
                    src={winterData.imgsrc}
                    alt={winterData.imageAlt}
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                  />
                </div>
                <div className='flex flex-1 flex-col space-y-2 p-4'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    <a href={winterData.name}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {winterData.name}
                    </a>
                  </h3>
                  <p className='text-sm text-gray-500'>color: {winterData.color}</p>
                  <div className='flex flex-1 flex-col justify-end'>
                    <p className='text-sm italic text-gray-500'>size: {winterData.size}</p>
                    <p className='text-base font-medium text-gray-900'>Rs.{winterData.price}</p>
                  </div>
                  <button
                    class='bg-blue-500 hover:bg-blue-300 w-32 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => dispatch(cartSlice.actions.addToCart(winterData))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;

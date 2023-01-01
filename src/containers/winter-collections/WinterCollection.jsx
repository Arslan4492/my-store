import React from "react";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";
import { winterProducts } from "./data";
import ProductCategory from "./productCategory";
const WinterCollection = () => {
  const dispatch = useDispatch();

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ProductCategory />
          <div className="w-full p-4 grid grid-cols-3 gap-5">
            {winterProducts.map((winterData) => (
              <div>
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={winterData.imgsrc}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {winterData.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {winterData.name}
                  </h2>
                  <p className="mt-1">{winterData.price}</p>
                </div>
                <button
                  className="bg-blue-700 text-white px-2 py-2 rounded-lg"
                  onClick={() =>
                    dispatch(cartSlice.actions.addToCart(winterData))
                  }
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;

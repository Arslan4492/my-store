import React, { useEffect, useState } from "react";
import { getUnStictedMenClothes } from "../../../API";
import { useQuery } from "react-query";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

const UnStitchMenCollection = () => {
  // const { title } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery("categories", getUnStictedMenClothes);
  const [categoryMen, setCategoryMen] = useState([]);

  useEffect(() => {
    if (categories)
      setCategoryMen(categories.filter((c) => c.title === "UNSTITCHED"));
  }, [categories]);

  if (isLoading) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">lOADING...</h2>
    );
  }

  if (error) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">SERVER ERROR</h2>
    );
  }
  const GoDetails = () => {
    navigate(`/unstitch-collections/unstitch`);
  };
  return (
    <>
      {/* <div className="w-full">
        {categoryMen.length > 0 && (
          <div className=" w-1/2 h-1/2 image_container border-10 border-white hover:cursor-pointer">
            <img
              src={categoryMen[0].image}
              className="h-1/2 w-1/2"
              alt={`${categoryMen[0].title} image`}
            />
          </div>
        )}

        <div className="flex flex-row flex-wrap justify-start">
          {categoryMen.length > 0 &&
            categoryMen[0]?.subCategories.map((category) => (
              <div
                className="w-1/2 border-10 border-white hover:cursor-pointer image_container"
                key={category.id}
              >
                <img
                  src={category.image}
                  onClick={() => GoDetails(category.title)}
                  alt={`${category.title} image`}
                />
              </div>
            ))}
        </div>
      </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">UnStitched Mens Clothes</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {categoryMen.length > 0 &&
              categoryMen[0]?.subCategories.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                    <img
                      src={product.image}
                      alt={`${product.title} image`}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500">
                        {product.options}
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UnStitchMenCollection;

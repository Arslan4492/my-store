import React, { useEffect, useState } from "react";
import { getCategories } from "../../API";
import { useQuery } from "react-query";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery("categories", getCategories);
  const [categoryMen, setCategoryMen] = useState([]);

  useEffect(() => {
    if (categories) setCategoryMen(categories.filter((c) => c.title === "MEN"));
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
  const GoDetails = (category) => {   
    navigate(`/men-collections/${category}`);
  };
  return (
    <div className="w-full">
      <div className=" flex items-center px-1">
          <span className="block">HOME</span><img src={require('../../assets/icons/right-arrow.png')} className="mx-2 opacity-[0.5]" width="20px" alt="" /> <span className="opacity-[0.3] block">MEN</span> 
      </div>
      {categoryMen.length > 0 && (
        <div className="w-full image_container border-10 border-white hover:cursor-pointer">
          <img
            src={categoryMen[0].image}
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
                src={category.images[0]}
                onClick={() => GoDetails(category.title)}
                alt={`${category.title} image`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Men;

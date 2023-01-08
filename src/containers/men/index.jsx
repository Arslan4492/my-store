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
  const GoDetails = () => {
    navigate(`/unstitch-collections/unstitch`);
  };
  return (
    <div className="w-full">
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
                src={category.image}
                onClick={() => GoDetails(category.title)}
                alt={`${category.title} image`}
              />
            </div>
          ))}
      </div>
<<<<<<< HEAD

      <div className="flex flex-row">
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/03_eastern.jpg"
            alt="T Shirt"
            className="scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/04_shoes.jpg"
            alt="T Shirt"
            className="scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/03_eastern.jpg"
            alt="T Shirt"
            className="scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/04_shoes.jpg"
            alt="T Shirt"
            className="scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>
      </div>
    </>
=======
    </div>
>>>>>>> 21e48be3c00090171824d1efd0de68a19aaad016
  );
};

export default Men;

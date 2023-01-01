import React from "react";

const Men = () => {
  return (
    <>
      <div className="w-full h-50px">
        <img
          width="100%"
          src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/05_inside_banner_wb.jpg"
          alt="T Shirt"
        />
      </div>

      <div className="flex flex-row">
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/02_western.jpg"
            alt="T Shirt"
            className="scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>
        <div className="w-670px h-450px p-3  border-2 border-white">
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/01_unstitched.jpg"
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
  );
};

export default Men;

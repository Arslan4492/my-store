import React from "react";

const Men = () => {
  return (
    <>
      <div style={{ width: "100%", height: "50px" }}>
        <img
          width="100%"
          src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/05_inside_banner_wb.jpg"
          alt="T Shirt"
        />
      </div>

      <div style={{ display: "flex", padding: "20px" }}>
        <div style={{ width: "650px", height: "450px" }}>
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/02_western.jpg"
            alt="T Shirt"
            className="transform-scale-105 transition-transform duration-500"
          />
        </div>
        <div
          style={{ margin: "0 10px", width: "650px", height: "450px" }}
          className="onMouseEnter"
        >
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/01_unstitched.jpg"
            alt="T Shirt"
            className="transform-scale-105 transition-transform duration-100"
          />
        </div>
      </div>

      <div style={{ display: "flex", padding: "20px" }}>
        <div style={{ width: "650px", height: "750px" }}>
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/02_western.jpg"
            alt="T Shirt"
          />
        </div>
        <div style={{ margin: "0 10px", width: "650px", height: "750px" }}>
          <img
            src="https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/01_unstitched.jpg"
            alt="T Shirt"
          />
        </div>
      </div>
    </>
  );
};

export default Men;

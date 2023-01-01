import React, { useState } from "react";

const ProductCategory = (props) => {
  const [category, setCategory] = useState("");
  const getCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="col-md-2">
      <label className="form-label">Category :</label>
      <select
        value={props.selected}
        onChange={getCategory}
        className="form-select"
      >
        <option value="Jackets">Jackets</option>
        <option value="winterShirt">winterShirt</option>
        <option value="winterPants">winterPants</option>
      </select>
    </div>
  );
};

export default ProductCategory;

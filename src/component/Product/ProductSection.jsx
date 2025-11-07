import React from "react";
import CardComponent from "./CardComponent";
//tạo ra section product
const ProductSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default ProductSection;

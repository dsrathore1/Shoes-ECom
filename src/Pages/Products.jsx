import React from "react";
import Card from "../Components/Card";

const Products = () => {
  return (
    <div className="flex flex-wrap w-full gap-10 my-10 justify-center items-center">
      <Card id={20} range={20} />
      <Card id={20} range={20} />
    </div>
  );
};

export default Products;

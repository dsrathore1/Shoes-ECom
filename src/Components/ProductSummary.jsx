import React from "react";
import { useSelector } from "react-redux";

const ProductSummary = () => {
  const { totalQuantity } = useSelector(({ cart }) => cart);

  return (
    <>
      <div className="h-full rounded-xl p-4 w-full ml-5 bg-white">
        <h1 className="text-3xl font-bold font-mono tracking-wide mb-2">
          Summary
        </h1>
        <hr className="border-dashed border-2" />
        <div className="flex flex-col h-full justify-center items-start">
          <div className="w-full h-full">
            <h2 className="w-full my-8 flex justify-between items-center text-2xl">
              Total Quantity{" "}
              <span className="font-bold text-4xl">{totalQuantity}</span>
            </h2>
            <h2 className="w-full my-8 flex justify-between items-center text-2xl">
              Total Price <span className="font-bold text-4xl">$ 0</span>
            </h2>
          </div>
          <button className="bg-blue-500 active:translate-y-1 duration-200 ease-in-out mb-14 text-white text-xl w-full h-20 rounded shadow-blue-300 shadow-md">
            Go to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSummary;

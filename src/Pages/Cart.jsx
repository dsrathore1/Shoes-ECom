import React from "react";
import CartProduct from "../Components/CartProduct";
import ProductSummary from "../Components/ProductSummary";

const Cart = () => {
  return (
    <>
      <div className="h-[89.2vh] bg-gradient-to-r from-[#09203f] to-[#223442] w-full flex justify-center items-center px-8">
        <div className="shadow-xl bg-white rounded-2xl h-[80%] w-full p-5">
          <header className="flex justify-between items-center">
            <h1 className="font-bold uppercase text-xl">Shopping Cart</h1>
            <button
              onClick={() => {}}
              className="text-red-400 underline-offset-4 underline"
            >
              Remove all
            </button>
          </header>
          <div className="h-[88%]  overflow-y-scroll scroll-ml-10">
            <CartProduct />
          </div>
        </div>
        <div className="w-[40%] h-1/2">
          <ProductSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;

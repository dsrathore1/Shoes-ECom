import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const CartProduct = () => {
  let count = 0;
  const [quantity, setQuantity] = useState(count);

  const { cartArray } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cartArray.length);
  }, [cartArray]);

  return (
    <>
      {cartArray.map((data) => {
        return (
          <div
            className="w-full h-44 flex gap-x-5 my-5 bg-[#f8f8f8] shadow-md rounded-lg select-none cursor-default"
            key={data.id}
          >
            <img
              onClick={() => (window.location.href = `user/${data.id}`)}
              className="h-full cursor-pointer hover:scale-[.8] duration-300 transition-all ease-linear rounded-ss-lg rounded-es-lg"
              alt="#shoes"
              src={data.imageURL}
            />
            <div className="flex justify-between w-full items-center px-10">
              <div className="my-5 space-y-3">
                <h1 className="text-3xl product-title tracking-wide">
                  {data.name}
                </h1>
                <h1 className="text-lg uppercase font-semibold">
                  {data.category} shoes
                </h1>
                <h2 className="uppercase">
                  {data.brand} for {data.gender}
                </h2>
                <h3 className="font-semibold">
                  Size :- <span className="text-lg font-bold">8</span>
                </h3>
              </div>
              <div className="flex justify-center items-center gap-8 text-2xl">
                <button
                  onClick={() => {
                    if (quantity === 0) {
                      return setQuantity(0);
                    } else {
                      setQuantity(count--);
                      console.log(count--);
                    }
                  }}
                  className="h-10 w-10 flex justify-center items-center rounded-full text-white bg-blue-300"
                >
                  <AiOutlineMinus />
                </button>
                <span className="font-bold border-2 border-gray-400 px-8 rounded">
                  {quantity}
                </span>
                <button
                  onClick={() => {
                    setQuantity(count++);
                    if (quantity === data.items_left) {
                      return setQuantity(count);
                    }
                  }}
                  className="h-10 w-10 flex justify-center items-center rounded-full text-white bg-blue-300"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="font-bold text-4xl">${data.price}</p>
                <AiFillDelete color="#f67a7a" size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartProduct;

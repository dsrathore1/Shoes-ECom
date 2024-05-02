import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../JSON/shoes_data.json";
import { FaShoppingCart } from "react-icons/fa";
import Card from "./Card";

const Product = () => {
  const { userID } = useParams();
  const [selectSize, setSelectSize] = useState(false);
  // const [size, setSize] = useState(8);

  return (
    <>
      {Data.product
        .filter((filterProduct) => filterProduct.id === Number(userID))
        .map((product, index) => {
          console.log(product.name);
          return (
            <div key={index}>
              <div className="h-full w-full mb-2 pr-5 flex bg-white ">
                <img alt="#product" className="" src={product.imageURL} />
                <div className="px-10 py-5 space-y-6">
                  <h1 className="text-6xl font-light tracking-wide uppercase">
                    <span className="font-black">{product.category}</span> Shoes{" "}
                    <div className="text-3xl z-20 relative inline">
                      For {product.gender}
                      <div className="bg-blue-400 h-3 bottom-2 w-16 absolute right-0 opacity-50 -z-10" />
                    </div>
                  </h1>
                  <h3 className="product-title text-2xl opacity-50 tracking-wide">
                    {product.name}
                  </h3>
                  <h2 className="text-4xl font-bold">
                    <span className="text-gray-300 mr-3 text-3xl font-light line-through">
                      {product.price + 80}$
                    </span>
                    <span className="text-blue-400">{product.price}$</span>
                  </h2>
                  <div className="space-y-2">
                    <h2 className="text-blue-400 text-3xl font-semibold">
                      Description
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam, nostrum! Iusto tenetur, quisquam repudiandae
                      eveniet sunt voluptates cupiditate vel! Minus id ipsam
                      mollitia eum vitae deleniti pariatur quod, eveniet magnam
                      perspiciatis quos, dolor aliquam aperiam. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Dolores,
                      unde!
                    </p>
                  </div>
                  <div>
                    <h1 className="text-3xl text-blue-400 font-semibold mb-6">
                      Size
                    </h1>
                    <ol className="flex gap-x-10 items-center text-xl font-light">
                      <button
                        onClick={() => setSelectSize(!selectSize)}
                        className={
                          selectSize
                            ? "bg-blue-400 text-white h-10 shadow w-10 rounded-full flex justify-center items-center"
                            : "bg-transparent h-10 w-10"
                        }
                      >
                        6
                      </button>
                      <button
                        onClick={() => setSelectSize(!selectSize)}
                        className={
                          selectSize
                            ? "bg-blue-400 text-white h-10 shadow w-10 rounded-full flex justify-center items-center"
                            : "bg-transparent h-10 w-10"
                        }
                      >
                        7
                      </button>
                      <button
                        onClick={() => setSelectSize(!selectSize)}
                        className={
                          selectSize
                            ? "bg-blue-400 text-white h-10 shadow w-10 rounded-full flex justify-center items-center"
                            : "bg-transparent h-10 w-10"
                        }
                      >
                        8
                      </button>
                      <button
                        onClick={() => setSelectSize(!selectSize)}
                        className={
                          selectSize
                            ? "bg-blue-400 text-white h-10 shadow w-10 rounded-full flex justify-center items-center"
                            : "bg-transparent h-10 w-10"
                        }
                      >
                        9
                      </button>
                      <button
                        onClick={() => setSelectSize(!selectSize)}
                        className={
                          selectSize
                            ? "bg-blue-400 text-white h-10 shadow w-10 rounded-full flex justify-center items-center"
                            : "bg-transparent h-10 w-10"
                        }
                      >
                        10
                      </button>
                    </ol>
                  </div>
                  <div className="flex justify-around items-center">
                    <button className="uppercase text-blue-400 border-2 border-blue-400 px-12 py-3 rounded-full flex justify-around items-center hover:bg-blue-400 hover:text-white ease-linear duration-300 transition-all drop-shadow-md">
                      <FaShoppingCart className="mr-6" size={20} /> Add to cart
                    </button>
                    <button className="uppercase text-white outline-none shadow border-transparent bg-blue-400 px-20 py-3 rounded-full hover:bg-transparent hover:text-blue-400 hover:border-blue-400 border-2 ease-linear duration-300 transition-all font-bold">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div>
        <h1 className="font-bold m-4 text-3xl uppercase">Recommended</h1>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 my-10">
          <Card id={8} range={8} />
        </div>
      </div>
    </>
  );
};

export default Product;

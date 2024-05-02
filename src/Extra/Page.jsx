import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Features/cartSlice";
import { useState } from "react";

export default function Extra() {
  const Shoes = useSelector((items) => items.cart.items);
  const dispatch = useDispatch();

  const [items, setItems] = useState("");
  console.log(items)

  return (
    <>
      {Shoes.product
        .filter((product) => product.id <= 7)
        .map((data, index) => {
          return (
            <div className="bg-gray-300" key={index}>
              <h1>{data.gender}</h1>
              <img
                onClick={() => {
                  setItems((prev) => [...prev, data]);
                  dispatch(addToCart(data));
                }}
                alt="#shoes_photo"
                src={data.imageURL}
              />
            </div>
          );
        })}
    </>
  );
}

import { addToCart } from "../Redux/Features/cartSlice";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ id = 4, gender = "", range = 4 }) {
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      {items.product
        .filter((product) => product.id <= id || product.gender === gender)
        .slice(0, range)
        .map((shoes, index) => {
          return (
            <div
              className="h-[25rem] cursor-default hover:scale-[1.1] transition-all duration-300 ease-linear relative rounded-xl w-[20%] shadow-md"
              key={index}
            >
              <div
                onClick={() => {
                  window.location.href = `/user/${shoes.id}`;
                }}
              >
                <p className="absolute right-2 z-10">
                  Only
                  <span className="font-bold text-lg">
                    <div className="bg-blue-400 opacity-50 rotate-[-8deg] rounded-full -z-10 absolute left-[30%] top-2 h-3 w-10" />{" "}
                    {shoes.items_left}
                  </span>{" "}
                  left
                </p>
                <img
                  className="object-cover rounded-tl-xl rounded-tr-xl h-[12.75rem] w-full"
                  alt="#product_img"
                  src={shoes.imageURL}
                />
                <h1 className="product-title tracking-wide text-center text-xl my-4 truncate px-2">
                  {shoes.name}
                </h1>
                <div className="w-full h-8 flex justify-between items-center px-4">
                  <p className="text-lg font-medium">{shoes.category}</p>
                  <p className="text-lg font-black uppercase font-sans">
                    {shoes.brand}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center flex-col">
                <p className="my-3 font-black text-2xl relative">
                  <div className="bg-blue-400 opacity-50 rotate-[-10deg] rounded-full absolute -z-10 left-[-20%] top-3 h-3 w-20" />
                  {shoes.price}$
                </p>
                <div className="w-full h-12 flex justify-between items-center">
                  <button
                    onClick={() => {
                      dispatch(addToCart(shoes));
                    }}
                    className="bg-gray-300 w-1/2 h-full rounded-es-xl"
                  >
                    Add to cart
                  </button>
                  <button
                    className="w-1/2 bg-blue-500 text-white font-semibold h-full rounded-ee-xl"
                    onClick={() => alert("Buy now")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

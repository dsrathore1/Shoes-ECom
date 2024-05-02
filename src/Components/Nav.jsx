import { toast } from "react-toastify";
import { auth, store } from "../firebase/auth";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [userDetail, setUserDetail] = useState("");

  // const [searchContent, setSearchContent] = useState("");

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      toast.error(error);
    }
  };

  const getDetails = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(store, "Users", user.uid);
        const getUser = await getDoc(docRef);
        if (getUser.exists()) {
          setUserDetail(getUser.data());
        }
      }
    });
  };

  useEffect(() => {
    getDetails();
    // console.log(num.length);
  }, []);

  return (
    <>
      <nav className="bg-white bg-fixed dark:bg-gray-900 w-full z-20 top-0 start-0 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-white text-4xl product-title tracking-wide h-10">
            SH<span className="text-blue-500 animate-pulse">O</span>ES
          </div>
          <div className="flex md:order-2 gap-x-10 md:space-x-0 rtl:space-x-reverse items-center">
            {search ? (
              <input
                className="border-2 p-2 rounded caret-blue-500 outline-none text-black border-white"
                placeholder="Search"
              />
            ) : (
              ""
            )}
            <AiOutlineSearch
              className="cursor-pointer"
              size={30}
              onClick={() => {
                setSearch(!search);
                console.log(search);
              }}
              color={search ? "#3b82f6" : "#fff"}
            />
            <Link to={"/shopping-cart"} className="relative">
              <div className="h-5 w-5 bg-blue-500 rounded-full justify-center items-center flex text-white absolute -right-2 -top-2 animate-bounce">
                0
              </div>
              <AiOutlineShoppingCart
                className="cursor-pointer"
                size={30}
                color="#fff"
              />
            </Link>
            <div className="text-white flex justify-center items-center gap-x-3">
              <FaUser size={25} color="#fff" />
              {userDetail.username}
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded px-6 py-3 text-sm uppercase text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log Out
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

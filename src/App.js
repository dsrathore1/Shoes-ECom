import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./(auth)/login";
import SignUp from "./(auth)/signUp";
import Profile from "./Pages/Profile";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase/auth";
import Home from "./Pages/Home";
import Navbar from "./Components/Nav";
import Extra from "./Extra/Page";
import Product from "./Components/HomeProduct";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Cart from "./Pages/Cart";

const Products = React.lazy(() => import("./Pages/Products"));

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <ToastContainer
        autoClose={2000}
        theme="dark"
        draggable
        pauseOnHover={false}
        position="top-center"
      />
      <Router>
        {user ? <Navbar /> : ""}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <React.Suspense
                fallback={
                  <p className="h-[100vh] w-full justify-center items-center flex text-4xl font-bold font-serif">
                    Loading...
                  </p>
                }
              >
                <Products />
              </React.Suspense>
            }
          />
          <Route path="/user/:userID" element={<Product />} />
          <Route path="/shopping-cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

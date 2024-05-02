import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, store } from "../firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, pwd);
      const user = auth.currentUser;

      toast.success("User register successfully!");

      if (user) {
        await setDoc(doc(store, "Users", user.uid), {
          email: user.email,
          username: uname,
        });
      }

      setEmail("");
      setUname("");
      setPwd("");

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-evenly items-center flex-col">
      <h1 className="text-3xl font-bold uppercase">✨Sign Up✨</h1>
      <form
        onSubmit={handleRegister}
        className="border-t-[3px] rounded-lg border-opacity-20 bg-[#fff] border-gray-200 h-[80%] w-[40%] flex justify-center items-center flex-col gap-y-10"
      >
        <div className="w-1/2 space-y-2 flex flex-col">
          <label className="uppercase">Username</label>
          <input
            onChange={(e) => setUname(e.target.value)}
            className="px-2 py-3 rounded text-black border-2"
            value={uname}
            placeholder="Enter your Username"
          />
        </div>
        <div className="w-1/2 space-y-2 flex flex-col">
          <label className="uppercase">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-3 rounded text-black border-2"
            value={email}
            placeholder="Enter your Email ID"
          />
        </div>
        <div className="w-1/2 space-y-2 flex flex-col">
          <label className="uppercase">Password</label>
          <input
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            className="px-2 py-3 rounded text-black border-2"
            value={pwd}
            placeholder="Enter your Password"
          />
        </div>

        <button
          className="px-20 py-2 rounded bg-blue-400 font-bold uppercase text-lg text-white"
          type="submit"
        >
          Submit
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 text-lg">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

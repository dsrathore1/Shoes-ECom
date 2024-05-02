import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      toast.success("Logged in successfully", {
        hideProgressBar: false,
      });

      setEmail("");
      setPwd("");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full flex justify-evenly items-center flex-col">
        <h1 className="text-3xl font-bold uppercase">✨Login✨</h1>
        <form
          onSubmit={handleLogin}
          className="border-t-[3px] rounded-lg border-opacity-20 bg-[#fff] border-gray-200 h-[70%] w-[40%] flex justify-center items-center flex-col gap-y-10"
        >
          <div className="w-1/2 space-y-2 flex flex-col">
            <label className="uppercase">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-2 py-3 rounded border-2"
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
            className="px-20 py-2 text-white rounded bg-blue-400 font-bold uppercase text-lg"
            type="submit"
          >
            Submit
          </button>
          <p>
            Do not have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 text-lg ">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

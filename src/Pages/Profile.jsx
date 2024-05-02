import React, { useEffect, useState } from "react";
import { auth, store } from "../firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        //   console.log(user);
        const docRef = doc(store, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          // console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
          toast.error("User is not logged in");
        }
      } else {
        toast.warning("You are not Logged in!!");
        window.location.href = "/login";
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div className="h-[100vh] w-full bg-[#ededed] flex justify-center items-center">
          <div className="shadow-2xl bg-white h-[60%] w-1/2 text-center rounded-xl p-2 justify-around items-center flex flex-col">
            <h1 className="text-6xl uppercase font-semibold text-black">
              🎀Welcome🎀
            </h1>

            <div className="text-black mt-10 px-10 flex flex-col items-start space-y-10 py-10">
              <p className="font-bold text-xl">
                Email : <span className="font-normal">{userDetails.email}</span>
              </p>
              <p className="font-bold text-xl">
                Username :{" "}
                <span className="font-normal">{userDetails.username}</span>
              </p>
            </div>
            <div className="w-1/2 text-xl font-medium">
              <button
                className="uppercase rounded py-4 shadow-lg w-full h-full bg-black text-white"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-4xl font-bold uppercase h-[100vh] w-full flex justify-center items-center">
          Loading...
        </p>
      )}
    </>
  );
}

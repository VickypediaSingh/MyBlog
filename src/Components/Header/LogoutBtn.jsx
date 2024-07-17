import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logout } from "../../Features/AuthSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logouthandler = () => {
    authservice.Logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 font-medium text-red-300 duration-200
            transform hover:scale-105 hover:bg-red-700 hover:text-white hover:shadow-md
            hover:shadow-cyan-500 rounded-full transition-all ease-in-out"
      onClick={logouthandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

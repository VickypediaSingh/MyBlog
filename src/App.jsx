import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./Features/AuthSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ParticlesBg from "./Components/ParticlesBg";

function App() {
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .GetCurrentUser()
      .then((UserData) => {
        if (UserData) {
          dispatch(login({ UserData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="w-full">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <ParticlesBg />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>
  );
}

export default App;

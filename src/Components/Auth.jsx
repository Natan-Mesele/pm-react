import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@mui/material";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (data) => {
    console.log("Login data:", data);
  };

  const handleSignup = (data) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          {isLogin ? <h2 className="text-2xl font-bold">Login</h2> : <h2 className="text-2xl font-bold">Signup</h2>}
        </div>
        {isLogin ? <Login onLogin={handleLogin} /> : <Signup onSignup={handleSignup} />}
        <div className="mt-4 text-center">
          {isLogin ? (
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Button variant="text" onClick={() => setIsLogin(false)} className="text-indigo-600">
                Signup
              </Button>
            </p>
          ) : (
            <p className="text-gray-500">
              Already have an account?{" "}
              <Button variant="text" onClick={() => setIsLogin(true)} className="text-indigo-600">
                Login
              </Button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

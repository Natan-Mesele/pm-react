import React, {useState} from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@mui/material";
import "./Auth.css";

function Auth() {
  const [active, setActive] = useState(true);
  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 syace-y-5">
            {active ? <Signup /> : <Login />}
            <div>
              <span>Already have account?</span>
              <Button variant="ghost" onClick={() => setActive(!active)}>
                {active ? "signin" : "signup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
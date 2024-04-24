"use client";
import React from "react";
import { useState } from "react";
import type { LoginDetails } from "@/types";


const Login = () => {

  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { name , value } = e.target
    setLoginDetails((prevLoginDetails)=>({
      ...prevLoginDetails,
      [name]:value
    }))
  }
  return (
    <div className="flex px-36 pb-[25.8rem] flex-col items-center gap-[18.625rem]">
      <div className="flex flex-col items-start gap-[3.8125rem]">
        <div className="input-div">
          <input type="email" placeholder="Email" value={loginDetails.email} onChange={handleChange} name="email"></input>
        </div>
        <div className="input-div">
          <input type="password" placeholder="Password" value={loginDetails.password} onChange={handleChange} name="password"></input>
        </div>
      </div>
    </div>
  );
};

export default Login;

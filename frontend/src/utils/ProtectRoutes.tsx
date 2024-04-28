"use client";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
interface Props {
  children: React.ReactNode;
}

export default function ProtectRoutes( {children} : Props ){
  
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter()
  useEffect(()=>{

    if(!isAuthenticated){
      router.push('/landing')
    }

  },[isAuthenticated,router])
  
  if(!isAuthenticated){
    return null;
  }

  return(<>{children}</>)};


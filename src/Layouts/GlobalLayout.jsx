import React from "react";
import { Outlet } from "react-router-dom";
import { SideMenu } from "./SideBar";
import { Header } from "./Header";
import { useAuth } from "../Context";

export const GlobalLayout = () => {
  const { isAuthenticated, isDarkTheme } = useAuth();

  return (
    <div className={`flex min-h-screen ${isDarkTheme ? 'bg-black text-white' : 'bg-[#FFFFF0] text-black'}`}>
      {isAuthenticated && <SideMenu />}
      <div className="flex-1 flex flex-col">
        {isAuthenticated && <Header />}
        <main className={`flex-1 ${isAuthenticated && 'p-[10px] ml-[100px]'} ${isDarkTheme ? 'bg-black' : 'bg-[#FFFFF0]'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircleThin } from "react-icons/pi";
import { useAuth } from "../Context";
import { useLocation } from "react-router-dom";
import { ConfirmModal } from "../components/Modal/ConfirmModal";

export const Header = () => {
  const { toggleTheme, isDarkTheme, isAuthenticated } = useAuth();
  const location = useLocation();
  const userName = localStorage.getItem("username") || "User Name";
  
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const getShortName = (name) => {
    const words = name.trim().split(" ");
    if (words.length > 1) {
      return words[0][0] + words[1][0];
    }
    return words[0][0];
  };

  const pathName = location.pathname.split("/")[1];
  const pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1) || "Dashboard";

  const handleNotificationClick = () => {
    setNotificationModalOpen(true);
  };

  const handleCartClick = () => {
    setCartModalOpen(true);
  };

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center pl-[5px] pt-[5px] md:pt-[25px] md:pb-[20px] pr-[5px] md:pr-[90px] ${
        isAuthenticated && "ml-[100px]"
      } ${isDarkTheme ? "bg-black text-white" : "bg-[#FFFFF0] text-gray-800"}`}
    >
      <div className="flex items-center text-lg font-semibold">
        <FaChevronRight className="mr-2 text-gray-500" />
        <span>{pageTitle}</span>
      </div>
      <div className="flex items-center gap-1 md:gap-3 space-x-6">
        <IoMdNotificationsOutline
          className="md:flex text-gray-600 cursor-pointer hover:text-gray-800 transition"
          size={26}
          onClick={handleNotificationClick}
        />
        {isDarkTheme ? (
          <GoSun
            className="md:flex text-gray-600 cursor-pointer hover:text-gray-800 transition"
            size={26}
            onClick={toggleTheme}
          />
        ) : (
          <GoMoon
            className="md:flex text-gray-600 cursor-pointer hover:text-gray-800 transition"
            size={26}
            onClick={toggleTheme}
          />
        )}
        <IoCartOutline
          className="flex text-gray-600 cursor-pointer hover:text-gray-800 transition"
          size={26}
          onClick={handleCartClick}
        />
        <div className="hidden md:flex items-center space-x-2">
          <PiUserCircleThin fontSize={42} />
          <div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs">User Role</p>
          </div>
        </div>
        <div className="flex md:hidden items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-lg font-semibold">
            {getShortName(userName)}
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isNotificationModalOpen}
        onClose={() => setNotificationModalOpen(false)}
        title="Notifications"
        message="Here are your notifications."
      />
      <ConfirmModal
        isOpen={isCartModalOpen}
        onClose={() => setCartModalOpen(false)}
        title="Cart"
        message="Here are your cart items."
      />
    </header>
  );
};

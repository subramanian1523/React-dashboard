import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  FaBars,
  FaTimes,
  FaBox,
  FaClipboardList,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoLogoAppleAr } from "react-icons/io5";
import { Button } from "../components/Buttons/Button";
import { useAuth } from "../Context";
import { MdOutlineDashboard } from "react-icons/md";
import { ConfirmModal } from "../components/Modal/ConfirmModal";

export const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const { logout, isDarkTheme } = useAuth();

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleMenuClick = (item) => {
    setActiveItem(item.key);
    navigate(`/${item.key.toLowerCase().replace(" ", "-")}`);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard size={20} />,
      key: "Dashboard",
    },
    { name: "Products", icon: <FaBox size={20} />, key: "Products" },
    {
      name: "Sales Order",
      icon: <FaClipboardList size={20} />,
      key: "Sales-Order",
    },
    { name: "Reviews", icon: <FaStar size={20} />, key: "Reviews" },
  ];

  return (
    <div
      className={`flex flex-col ${
        isDarkTheme ? "bg-black" : "bg-[#006D5B]"
      } fixed h-[100%] md:h-[96vh] z-[99] text-white transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-100 md:w-64"} 
      md:m-5 md:rounded-2xl md:shadow-lg`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-start"
        } p-4`}
      >
        <IoLogoAppleAr />
      </div>

      <div className={`flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
        <Button onClick={toggleMenu} className="text-white border-none">
          {isCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
        </Button>
      </div>

      <div
        className={`px-4 py-2 ${isCollapsed && "text-center"} text-sm text-gray-200`}
      >
        Menu
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleMenuClick(item)}
              className="cursor-pointer" // Add cursor-pointer here
            >
              <div
                className={`relative flex ${
                  isCollapsed ? "justify-center" : "justify-start"
                } gap-3 items-center p-3 rounded-lg transition-colors ${
                  activeItem === item.key ? "text-white" : "text-gray-300"
                } hover:bg-gray-700`}
              >
                {activeItem === item.key && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 rounded"></div>
                )}
                {item.icon}
                {!isCollapsed && item.name}
              </div>
            </li>
          ))}

          <hr className="border-gray-200 mx-4 my-4" />
          <div
            className={`px-4 py-2 ${isCollapsed && "text-center"} text-sm text-gray-200`}
          >
            Others
          </div>

          <li
            onClick={() => setLogoutModalOpen(true)}
            className="cursor-pointer" // Add cursor-pointer here
          >
            <div
              className={`relative flex ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-3 items-center p-3 rounded-lg transition-colors ${
                activeItem === "Logout" ? "text-white" : "text-gray-300"
              } hover:bg-gray-700`}
            >
              {activeItem === "Logout" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 rounded"></div>
              )}
              <FaSignOutAlt size={20} />
              {!isCollapsed && "Logout"}
            </div>
          </li>

          <li
            onClick={() => setActiveItem("Settings")}
            className="cursor-pointer" // Add cursor-pointer here
          >
            <div
              className={`relative flex ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-3 items-center p-3 rounded-lg transition-colors ${
                activeItem === "Settings" ? "text-white" : "text-gray-300"
              } hover:bg-gray-700`}
            >
              {activeItem === "Settings" && (
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 rounded"></div>
              )}
              <FaCog size={20} />
              {!isCollapsed && "Settings"}
            </div>
          </li>
        </ul>
      </nav>
      <ConfirmModal
        isOpen={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </div>
  );
};

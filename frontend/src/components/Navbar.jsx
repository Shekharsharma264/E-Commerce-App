import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-70">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="border-none hidden w-2/4 h-[1.5px] text-gray-900 bg-gray-700"></hr>
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="border-none hidden w-2/4 h-[1.5px] text-gray-900 bg-gray-700"></hr>
        </NavLink>
        <NavLink to="/About" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] text-gray-900 bg-gray-700"></hr>
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="border-none hidden w-2/4 h-[1.5px] text-gray-900 bg-gray-700"></hr>
        </NavLink>
      </ul>
      <div className="flex items-center justify-between gap-8">
        <img
          onClick={() => {
            setShowSearch(true);
          }}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
        />
        <div className="group relative">
          <Link to="/login">
            <img className="w-5 cursor-pointer" src={assets.profile_icon} />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div
              className="
            flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded"
            >
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/Cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" />
          <p className="absolute right-[-5px] botton-[-5px] bg-black text-white rounded-full w-4 leading-4 text-center aspect-square text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          className="w-5 sm:hidden cursor-pointer"
          src={assets.menu_icon}
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-700 w-full">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="cursor-pointer border-b-2 flex items-center gap-4 py-4 px-3"
          >
            <img className="rotate-180 w-[10px] " src={assets.dropdown_icon} />
            <p>Back</p>
          </div>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/"
            className="hover:bg-black hover:text-white border-b-2 py-2 px-6"
          >
            HOME
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/Collection"
            className="hover:bg-black hover:text-white border-b-2 py-2 px-6"
          >
            COLLECTION
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/About"
            className="hover:bg-black hover:text-white border-b-2 py-2 px-6"
          >
            ABOUT
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/Contact"
            className="hover:bg-black hover:text-white border-b-2 py-2 px-6"
          >
            CONTACT
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            className="hover:bg-black hover:text-white border-b-2 py-2 px-6"
          >
            ADMIN PANEL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

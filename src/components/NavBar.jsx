import React, { useEffect, useState } from "react";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";

import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingBag } from "iconsax-react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  const [navstate, setNavstate] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  
  // when user srolled Down
  const onNavScroll = (e) => {
    if (window.scrollY > 30) {
      setNavstate(true);
    } else {
      setNavstate(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);


//  toggle menu for 
 const  onCartToggle = () => {
     dispatch(setOpenCart({
         cartState: true
     }))
 };

  return (
    <>
      <header
        className={
          !navstate
            ? "absolute top-7 left-0  right-0 opacity-100 z-50"
            : "fixed  top-0 left-0 right-0 h-[9vh] flex items-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between  nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navstate && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center ">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navstate && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center ">
              <HeartIcon
                className={`icon-style ${
                  navstate && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center " onClick={onCartToggle}>
              <button
                className="button border-none outline-none active:scale-110 transition-all duration-300 relative"
                type="button"
              >
                <ShoppingBag
                  className={`icon-style ${
                    navstate && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute -top-1 -right-2 rounded-full w-4 h-4 text-[0.65rem] leading-tight flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navstate
                      ? "bg-slate-900 text-slate-100"
                      : "bg-slate-100  text-slate-900 shadow-slate-100"
                  }`}
                >
                {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

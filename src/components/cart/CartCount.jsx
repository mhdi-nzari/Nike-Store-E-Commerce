import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const CartCount = ({onCartToggle , onClearCartItems, totalQTY}) => {
  return (
    <>
      <div className="bg-white h-11 flex items-center  justify-between px-3 sticky top-0 left-0 right-0 w-full ">
        <div className="flex items-center gap-5  ">
          <div className="grid items-center cursor-pointer" onClick={onCartToggle}>
               <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900  hover:text-orange-500 stroke-[2]"/>
          </div>
          <div className="grid items-center   cursor-pointer">
          <h1 className="text-base font-medium text-slate-900">Your Card <span className=" rounded px-2 py-0.5 bg-orange-500 ml-2 text-slate-100 font-normal text-xs">( {totalQTY } Items)</span></h1>
          </div>
        </div>
        <div className="flex  items-center">
          <button type="button" className=" w-5 h-5 rounded bg-red-500 active:scale-90 p-0.5">
               <XMarkIcon onClick={onClearCartItems} className="text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;

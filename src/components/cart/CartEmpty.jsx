import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Emptybag from '../../assets/emptybag.png'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen  px-11 text-center gap-7">
        <img src={Emptybag} alt="emptybag/img" className="w-40 lg:w-3/6 sm:w-28 h-auto object-fill transition-all duration-400 hover:scale-110" />
        <button onClick={onCartToggle} type="button" className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm [x-5 font-semibold acitve:scale-110">
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;

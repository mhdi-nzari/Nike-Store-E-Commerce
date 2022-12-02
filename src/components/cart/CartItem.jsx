import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { setClearItemQTY, setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch(),

  // after click on trash icon :) delete Cart item
   onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  },
  onIncreaseItem  = () => {
     dispatch(setIncreaseItemQTY({
      id,
      title,
      text,
      img,
      color,
      shadow,
      price,
      cartQuantity,
    }))
  },
  onDecreaseItem  = (e) => {
     dispatch(setDecreaseItemQTY({
      id,
      title,
      text,
      img,
      color,
      shadow,
      price,
      cartQuantity,
    }))


  },
  onClearItems  = (e) => {
     dispatch(setClearItemQTY())
  };


  return (
    <>
      <div className="flex items-center justify-between w-full px-5 ">
        <div className="flex items-center gap-10 ">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded-md p-5 hover:scale-105  transition-all duration-75  ease-in-out grid items-center  `}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />  
            <div className="absolute right-3 top-3 blur-theme-effect bg-white/80 text-black  px-1 rounded text-base">${price}</div>
          </div>
          <div className="grid items-center gap-5">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded  w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90" onClick={onDecreaseItem}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] text-md" />
              </button>

              <div className=" bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:g-5 lg:w-6 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-orange-500 rounded  w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90" onClick={onIncreaseItem}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] text-md" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center  gap-5 ">
          <div className="grid items-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium w-20">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center w-10 h-10"
            >
              <TrashIcon
                className="w-5 h-5 text-white cursor-pointer"
                onClick={onRemoveItem}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

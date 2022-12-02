import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearItemQTY,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch(),
    cartItems = useSelector(selectCartItems),
    totalAmount = useSelector(selectTotalAmount),
    totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  //  toggle menu for
  const ifCartState = useSelector(selectCartState),
    onCartToggle = () => {
      dispatch(
        setCloseCart({
          cartState: false,
        })
      );
    },
    onClearCartItems = (e) => {
      dispatch(setClearItemQTY());
    };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex flex-col items-start justify-start gap-7 lg:gap-10 overflow-y-scroll my-10 py-10  h-[70vh]  scroll-smooth scroll-hidden">
                {cartItems?.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-5 grid items-center rounded-tr-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>

                <div className="grid items-center gap-4 ">
                  <p className="text-center font-medium">
                    Texas and Shipping Will CalCulate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

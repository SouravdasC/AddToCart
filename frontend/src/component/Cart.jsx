import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BodyCom from "./BodyCom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItmes);
  const totalitems  = cartItems.reduce((accum, total)=> accum + total.quantity, 0) // Total items
  const totalAmount = cartItems.reduce((accum, total)=> accum + total.price * total.quantity, 0) // Total amount 
  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error("Item removed from cart");
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="centerDiv grid grid-cols-4 gap-4">
          {cartItems.map((product) => (
            <div key={product.id} className="">
              {/* {console.log(product.id)} */}
              {/* COMPONENT  */}
              <BodyCom productItems={product} imageStyle={`h-[30vh] w-[612vw] rounded-lg`} productStyle={`flex justify-around`} productName={`uppercase merriweather-light`} productPrice={`font-semibold capitalize`} productTextStyle={`merriweather-light capitalize text-gray-500 line-clamp-3 mt-4 mb-2`} /> {/*Component & style */}
              <div className=" bg-gray-700 text-white">
                {/* ✅ Increment/Decrement Buttons */}
                <button onClick={() => handleIncrement(product)} className="text-[1.8rem] mr-[1rem]">+</button>
                <span className="text-[1.3rem] mr-[1rem]">{product.quantity}</span>
                <button onClick={() => handleDecrement(product)} className="text-[1.8rem]">-</button>
              </div>
              <button
                className="btn"
                onClick={() => handleRemoveCart(product)}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems?.length > 0 && (
        <button
          className="btn"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      )}
      <ToastContainer position="top-right" autoClose={1500} theme="colored"/>
      <div>Total items: {totalitems}</div>
      <div>Total amount: {totalAmount}</div>
    </div>
  );
};

export default Cart;

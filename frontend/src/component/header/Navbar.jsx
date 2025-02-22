import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItmes);
  
  const navMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "about",
      path: "/",
    },
    {
      name: "contact",
      path: "/",
    },
    {
      name: "cart",
      path: "/cart",
    },
  ];
  return (
    <section className="bg-blue-500 text-white sticky top-0">
      <nav className="centerDiv flex justify-around items-center">
        <Link to={"/"}>
          <h1 className="uppercase  merriweather-bold mainTitle">
            shopping cart
          </h1>
        </Link>
        <ul className="flex justify-around items-center gap-8 capitalize text-[1.2rem] font-semibold">
          {navMenu.map((item, index) => (
            <li key={index} className={`hover:text-red-400 ${item.name === 'cart' && cartItems.length > 0 ? "text-red-300" : 'bg-blue'}`}>
              <Link to={item.path}>{item.name}{item.name === 'cart' ? (`${cartItems.length}`) : ''}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

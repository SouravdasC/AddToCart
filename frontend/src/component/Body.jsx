import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BodyCom from "./BodyCom";
import axios from 'axios'

const Body = () => {

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added to cart!");
  };

  useEffect(() => {
    axios.get("/api/menu")
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
  }, [])
  
  return (
    <section className="bg-gray-200 border p-[3rem]">
      <div className="centerDiv grid grid-cols-4 gap-4 p-[2rem]">
        {product.map((product) => (
          <div key={product.id} className="">
          {/* COMPONENT  */}
            <BodyCom productItems={product} imageStyle={`h-[30vh] w-[612vw] rounded-lg`} productStyle={`flex justify-around`} productName={`uppercase merriweather-light`} productPrice={`font-semibold capitalize`} productTextStyle={`merriweather-light capitalize text-gray-500 line-clamp-3 mt-4 mb-2`} /> {/*compnent & style */ }

            <button
              className="btn"
              onClick={() =>
                handleAddToCart(product)
              } /* onClick={() => dispatch(addToCart(product))} */
            >
              Add to cart
            </button>
          </div>
        ))}
        <ToastContainer position="top-right" autoClose={1500} />
      </div>
    </section>
  );
};

export default Body;

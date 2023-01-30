import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { motion } from "framer-motion";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, rating } = product;
  return (
    <article>
      <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ scale: 0 }}
      >
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition cursor-pointer">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img className="max-h-[160px]" src={image} alt={title} />
            </div>
          </div>
          <div className="absolute top-2 right-2 lg:top-6 lg:-right-11 lg:group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 lg:opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center w-10 h-10 bg-red-500">
                <BsPlus className="text-3xl text-white" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
        {/* category & title & price */}
        <div>
          <div className="flex justify-between mb-1">
            <div className="text-sm capitalize text-gray-500">{category}</div>
            <div className="flex items-center">
              <AiFillStar className="text-sky-500" />
              <span className="block ml-1">{rating.rate}</span>
            </div>
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1 line-clamp-2">{title}</h2>
          </Link>
          <div className="font-semibold">$ {price}</div>
        </div>
      </motion.div>
    </article>
  );
};

export default Product;

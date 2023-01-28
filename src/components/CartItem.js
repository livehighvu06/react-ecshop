import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:py-6 border-b border-gray-200 font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* Title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* Remove */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer w-fit h-fit"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-4 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="flex-1 text-center">{amount}</div>
              {/* plus */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div>$ {price}</div>
            {/* final price */}
            <div className=" text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

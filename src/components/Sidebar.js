import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-10 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col max-h-[300px] lg:max-h-[580px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col py-4 mt-4">
        <div className="flex justify-between mb-3 items-center ">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">total</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white text-xl w-12 h-12 flex justify-center items-center"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={"/"}
            className="bg-gray-200 flex p-4 mb-3 justify-center items-center text-primary font-medium"
          >
            View Cart
          </Link>
          <Link
            to={"/"}
            className="bg-primary flex p-4 mb-3 justify-center items-center text-white font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

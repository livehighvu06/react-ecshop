import React, { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart, itemAmount, setItemAmount } = useContext(CartContext);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, cur) => acc + cur.amount, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-none py-6 " : "bg-white py-4 shadow-md"
      } fixed t-0 w-full z-10 transition-all duration-500`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

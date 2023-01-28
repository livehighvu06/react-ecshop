import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    // 未加入購物車
    const newItemInCart = { ...product, amount: 1 };
    // 已加入購物車
    const itemInCart = cart.find((item) => item.id === id);
    // 如果購物車裡面已經有同樣的商品，會在數量上直接加一
    if (itemInCart) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: itemInCart.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItemInCart]);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

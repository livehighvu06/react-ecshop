import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);
  // add to cart
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
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  // clear
  const clearCart = () => {
    setCart([]);
  };
  // increase amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };
  // decrease amount
  const decreaseAmount = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: itemInCart.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (itemInCart.amount < 2) {
      removeFromCart(id);
    }
  };
  useEffect(() => {
    const total = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    setTotal(total);
  }, [cart]);
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, cur) => acc + cur.amount, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        setItemAmount,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

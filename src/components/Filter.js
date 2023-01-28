/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function Filter({ products, setFiltered }) {
  const [type, setType] = useState("all");
  const buttonActive =
    "border-2 border-sky-500 font-bold text-primary transition";
  useEffect(() => {
    if (type === "all") {
      setFiltered(products);
      return;
    }
    if (type === "trending") {
      const filteredProducts = products.filter((item) => {
        return (
          item.category === "men's clothing" ||
          item.category === "women's clothing"
        );
      });
      setFiltered(filteredProducts);
      return;
    }
    if (type === "topRated") {
      const topRatedProducts = products
        .filter((item) => item.rating.rate > 4)
        .sort((a, b) => b.rating.rate - a.rating.rate);
      setFiltered(topRatedProducts);
      return;
    }
  }, [products, type]);

  return (
    <ol className="flex items-center p-6">
      <li
        className={`${
          type === "all" ? buttonActive : ""
        } cursor-pointer px-4 py-2 mr-4`}
        onClick={() => setType("all")}
      >
        All
      </li>
      <li
        className={`${
          type === "trending" ? buttonActive : ""
        } cursor-pointer px-4 py-2 mr-4`}
        onClick={() => setType("trending")}
      >
        New Trending
      </li>
      <li
        className={`${
          type === "topRated" ? buttonActive : ""
        } cursor-pointer px-4 py-2`}
        onClick={() => setType("topRated")}
      >
        Top Rated
      </li>
    </ol>
  );
}

export default Filter;

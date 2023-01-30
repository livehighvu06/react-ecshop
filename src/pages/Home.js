import React, { useContext, useState } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { ProductContext } from "../contexts/ProductContext";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [filtered, setFiltered] = useState([]);

  const renderedProducts = filtered.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  console.log(filtered);
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <Filter setFiltered={setFiltered} products={products} />
          <>
            {products ? (
              <motion.div
                layout
                className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:lg:grid-cols-5"
              >
                <AnimatePresence>{renderedProducts}</AnimatePresence>
              </motion.div>
            ) : (
              <Loading />
            )}
          </>
        </div>
      </section>
    </div>
  );
};

export default Home;

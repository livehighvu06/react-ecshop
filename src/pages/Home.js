import React, { useContext } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {products.length === 0 ? (
            <Loading />
          ) : (
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:lg:grid-cols-5">
              {filteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

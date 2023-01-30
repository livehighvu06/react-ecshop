import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const boxVariant = {
  visible: {
    y: 0,

    transition: { duration: 0.5 },
  },
  hidden: { y: "100%" },
};
const Hero = () => {
  return (
    <section className="bg-pink-200 h-screen bg-hero bg-fixed bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-center h-full overflow-hidden">
        {/* text */}
        <motion.div variants={boxVariant} initial="hidden" animate={"visible"}>
          <div
            className="flex flex-col justify-center h-full"
            // ref={target}
          >
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
              New Trend
            </div>
            <h1 className="uppercase text-[48px] lg:text-[70px] leading-[1.1] font-light mb-4">
              autumn sale stylish <br />
              <span className="font-semibold">womens</span>
            </h1>
            <Link
              to={"/"}
              className="self-start uppercase font-semibold border-b-2 border-primary"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

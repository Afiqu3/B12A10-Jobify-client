import React from "react";
import useTheme from "../../hooks/useTheme";
import { motion } from "motion/react";

const FAQ = () => {
  const { theme } = useTheme();
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === "dark" ? "" : "text-[#244034]"
            } mb-2`}
          >
            FAQ
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

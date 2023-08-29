import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./slide";
import opt from "./opt";
function Discover() {
  return (
    <motion.div
      initial={{
        // scale: 0,
        x: "-100vw",
      }}
      animate={{
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      exit={{
        x: "100vw",
      }}
      className="h-screen pt-2 bg-white overflow-x-hidden"
    >
      {/* input div */}
      <div className="py-2 items-center flex justify-between px-4">
        <div className="flex gap-2 w-[80%] bg-gray-200 py-2 px-2 items-center">
          <BsSearch size={15} />
          <input
            className="bg-transparent  outline-none"
            type="text"
            placeholder="search"
          />
        </div>
        <p className="text-red-600">Search</p>
      </div>

      {/* Gallery contents */}
      <div className="w-screen flex items-center justify-center bg-[#0F1420] h-[300px] ">
        {/* Banner */}
       <img src="/fr.svg" alt="" />
      </div>

      {/* Singles container */}
      <div>
        {opt.map((d, id) => {
          return (
            <motion.div
              initial={{
                x: "-100vw",
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: id,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Slide key={id} name={d.name} count={d.count} />;
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Discover;

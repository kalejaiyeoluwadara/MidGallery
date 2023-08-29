import React,{useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
function Load({setLoader,loader}) {
  return (
    <motion.div 
    initial={{
        scale:1
    }}
    exit={{
        scale:0
    }}
    transition={{
        duration:0.7
    }}
    onClick={() =>{setLoader(false)}}
    className="absolute  flex items-center justify-center top-0 z-40  h-screen w-screen n bg-[#0F1420] ">
      <img src="/fr.svg" alt="" />
    </motion.div>
  );
}

export default Load

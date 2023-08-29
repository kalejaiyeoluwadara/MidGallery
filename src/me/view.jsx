import React from 'react'
import {motion} from 'framer-motion'
function View({view,setView}) {
  return (
    <motion.div
      initial={{
        y: -900,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        y: -900,
      }}
      className="absolute flex-col  flex items-center justify-center top-0 bg-black z-40 pt-5 h-screen w-screen "
    >
      <p
        onClick={() => [setView(null)]}
        className="hover:text-red-600 text-white mb-4 rounded-full  w-[50px] flex items-center justify-center h-[50px] cursor-pointer duration-[0.6s] py-2 hover:bg-white text-[35px] "
      >
        x
      </p>
      <motion.img
      initial={{
        scale:0.4
      }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="h-[90%] rounded-xl w-auto "
        src={view}
        alt=""
      />
    </motion.div>
  );
}

export default View

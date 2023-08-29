import React from 'react'
import {motion} from 'framer-motion'
import { RxDownload } from "react-icons/rx";
function Download({dn,setDn}) {
  return (
    <motion.div
      initial={{
        y: -500,
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: -500,
      }}
      className="absolute flex items-center z-40  justify-center w-[100%] top-[200px] "
    >
      <div className="mod  flex flex-col items-center justify-between pt-8 pb-5 text-white rounded-md h-[170px] w-[300px] ">
        <div>
          <p className="text-center flex px-4">
            Downloading your Image, would you like to continue
            <span>
              <RxDownload size={19} />
            </span>
          </p>
        </div>
        <div className="flex border-t-2 b1 uppercase w-[100%] gap-12 justify-between px-6 ">
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-2 w-[50%]  text-red-400 text-center h-[100%] "
          >
            <p onClick={() => setDn(false)}>Cancel</p>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mt-2 w-[50%] text-center h-[100%] "
          >
            <p onClick={() => setDn(false)}>ok</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Download

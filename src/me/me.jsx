import React,{useState} from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { BiBookmark } from "react-icons/bi";
import { BsArrowThroughHeart } from "react-icons/bs";
import View from './view';
import { FiMoreVertical, FiLock } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import pins from './data';
// import {FaLines} from "react-icons/fa"; 
function Me({view,setView}) {
  return (
    <motion.div
      className="h-screen overflow-y-scroll bg-white"
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
    >
    
      {/* Nav */}
      <div className="w-[100%]  relative py-4 items-center flex justify-center ">
        <div className="flex items-center  justify-between">
          <h1 className="flex font-[600] items-center gap-2 text-[20px] ">
            GalleryUser
          </h1>
          <div className="absolute gap-3 flex py-3 right-4">
            <AiOutlineEye size={27} />
            <FiMoreVertical size={27} />
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="flex mt-6 gap-4 justify-center items-center flex-col w-[100%]">
        <img
          className="h-[100px] w-[100px] rounded-full "
          src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1 className="font-[600] text-[18px] mb-2 ">@GalleryUser</h1>
        <div className="flex w-[90%] items-center justify-around gap-8">
          <div className="text-center">
            <h1 className="font-bold text-[19px] ">624</h1>
            <p>Following</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-[19px] ">6.2k</h1>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-[19px] ">4.5k</h1>
            <p>Likes</p>
          </div>
        </div>
        <div className="flex gap-2 w-[100%] items-center justify-center ">
          <div className="bg-gray-200 py-3 px-4 font-[600]  rounded-md ">
            <h1>Edit profile</h1>
          </div>
          <div className="bg-gray-200 py-3 px-4 font-[600]  rounded-md ">
            <h1>Find friends</h1>
          </div>
          <div className="bg-gray-200 py-3 px-4 font-[600]  rounded-md ">
            <BiBookmark size={25} />
          </div>
        </div>
        <h1 className="font-[600] opacity-[0.6]">Tap to add bio</h1>
      </div>

      {/* Bio  */}
      <div className="w-[100%] mt-6 flex items-center justify-around  ">
        <div className="opacity-[0.7] hover:opacity-[1] border-1 border-b-4 py-2 flex items-center justify-center border-black w-[20%] ">
          <CgDetailsMore size={28} />
        </div>
        <div className="opacity-[0.7] hover:opacity-[1] ">
          <BsArrowThroughHeart size={28} />
        </div>
        <div className="opacity-[0.7] hover:opacity-[1]">
          <FiLock size={25} />
        </div>
      </div>

      <div className="gap-3 px-4  py-3 flex flex-wrap items-start justify-center mt-12 w-screen h-auto overflow-scroll ">
        {pins.map((d, id) => {
          return (
            <motion.img
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.3
            }}
              onClick={() => {
                setView(d);
              }}
              key={id}
              className="h-auto w-auto rounded-xl "
              src={d}
              alt=""
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Me;

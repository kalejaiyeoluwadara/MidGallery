import React,{useState} from 'react'
import './single.css'
import {AiFillHome,AiOutlineHeart,AiFillHeart,AiFillMessage} from 'react-icons/ai'
import { BsPerson } from "react-icons/bs";
import { BiMessageMinus } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import {motion} from 'framer-motion'
import img from './images'
import { RxDownload } from "react-icons/rx";
import { FaRegCompass } from "react-icons/fa";

function Controls({ state, obj, urlsToDisplay2,setMsg,setDn }) {
  const [like,setLike] = useState(false);
  return (
    <div className=" absolute top-[200px] right-4 items-center justify-center flex flex-col  gap-4">
      <div className='relative'>
        <img
          src={urlsToDisplay2[state].urls.small}
          alt=""
          className="h-[55px] border-[3px] border-solid border-white w-[55px] mb-4 rounded-full bg-gray-400 "
        />
        <div  className='bg-red-600 absolute bottom-3 left-4 h-5 px-2 rounded-full'>
          <p className='text-white font-[400] '>+</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <motion.div
          whileTap={{
            scale: 5,
            rotate: -90,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <AiFillHeart
            onClick={() => setLike(!like)}
            className={` ${like ? "text-red-600" : "text-white"}`}
            size={40}
          />
        </motion.div>
        <p className="text-white text "> {!obj ? "12.2k" : obj.likes} </p>
      </div>

      <div
        className="flex flex-col gap-1 justify-center items-center"
        onClick={() => {
          setMsg(true);
        }}
      >
        <AiFillMessage className="ic" size={40} />
        <p className="text-white text"> {!obj ? "12.2k" : obj.msg} </p>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <PiShareFatFill className="ic" size={40} />
        <p className="text-white text"> {!obj ? "12.2k" : obj.forws} </p>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <RxDownload
          onClick={() => {
            setDn(true);
          }}
          className="ic"
          size={40}
        />
        <p className="text-white text"> {!obj ? "12.2k" : obj.down} </p>
      </div>

      {/* Messages */}
    </div>
  );
}

export default Controls

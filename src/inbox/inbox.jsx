import React,{useState} from 'react'
import { BsChevronDown, BsFillPersonFill,BsSend, BsMessenger } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillHeart,
  AiFillMessage,
} from "react-icons/ai";
import img from "../home/single/images";
const Comment = ({time,name,reply,comm,t2,img1,img2}) =>{
  return (
    <>
      {/* Inboxes */}
      <div className="flex flex-col px-4 mt-4 gap-2">
        <h1 className="opacity-[0.8] capitalize ">{time}</h1>
        <div className="flex w-[100%]  justify-between items-center ">
          <div className="flex gap-2">
            <div className=" relative w-[20%]">
              <img
                className="h-[50px]  w-[50px] rounded-full "
                src={img1}
                alt=""
              />
              <div className="absolute top-8 text-white border-[3px] border-white bg-blue-600 rounded-full px-[4px] py-[4px] -right-1">
                <AiFillMessage />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-[500] ">{name}</h1>
              <p className="text-[16px] w-[92%]">
                replied to your comment: <span>{reply}</span>
                <span className="opacity-[0.7]"> {t2}</span>
              </p>
              <p className="text-[14px] opacity-[0.8] ">
                codecks101: <span>{comm}</span>
              </p>
            </div>
          </div>

          <div>
            <img className="h-[60px] w-[50px]" src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

const Like = ({ time, name, comm, t2, img1, img2 }) => {
  return (
    <>
      {/* Inboxes */}
      <div className="flex flex-col px-4 mt-4 gap-2">
        <h1 className="opacity-[0.8] capitalize ">{time}</h1>
        <div className="flex w-[100%] items-center justify-between ">
          <div className='flex'>
            <div className=" relative w-[17%]">
              <img
                className="h-[50px] w-[50px] rounded-full "
                src={img1}
                alt=""
              />
              <div className="absolute top-8 text-white border-[3px] border-white bg-red-700 rounded-full px-[4px] py-[4px] right-0">
                <AiFillHeart />
              </div>
            </div>
            <div className="flex px-2 flex-col">
              <h1 className="font-[500] ">{name}</h1>
              <p className="text-[16px]">
                Liked to your comment
                <span className="opacity-[0.7]"> {t2}</span>
              </p>
              <p className="text-[14px] opacity-[0.8] ">
                codecks101: <span>{comm}</span>
              </p>
            </div>
          </div>
          <div>
            <img className="h-[60px] w-[50px]" src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
const Follow = ({ time, name, comm, t2, img1, img2 }) => {
  return (
    <>
      {/* Inboxes */}
      <div className="flex flex-col px-4 mt-4 gap-2 relative">
        <h1 className="opacity-[0.8] capitalize ">{time}</h1>
        <div className="flex w-[100%] items-center justify-between ">
          <div className='flex'>
            <div className=" relative w-[20%]">
              <img
                className="h-[50px] w-[50px] rounded-full "
                src={img1}
                alt=""
              />
              <div className="absolute top-8 text-white border-[3px] border-white bg-blue-500 rounded-full px-[4px] py-[4px] right-0">
                <BsFillPersonFill />
              </div>
            </div>
            <div className="flex px-2 flex-col">
              <h1 className="font-[500] ">{name}</h1>
              <p className="text-[16px]">Started following you</p>
              <p className="text-[14px] opacity-[0.8] ">{t2}</p>
            </div>
          </div>

          <div>
            <button className=" px-3 py-2 bg-red-600 rounded-sm text-white">
              Follow back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
function Inbox() {
  return (
    <motion.div
      className="h-[100%] overflow-y-scroll bg-white "
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
      <div className="w-[100%] relative py-4 items-center flex justify-center ">
        <div className="flex items-center  justify-between">
          <h1 className="flex font-[600] items-center gap-2 text-[20px] ">
            All activity
            <BsChevronDown />
          </h1>
          <div className="absolute py-3 right-4">
            <BsSend size={23} />
          </div>
        </div>
      </div>
      {/* Inboxes */}
      <div>
        <Comment
          name={"Andey"}
          reply={"kinda"}
          time={"today"}
          comm={"Red inks"}
          t2={"30min"}
          img1={img[3]}
          img2={img[5]}
        />
        <Follow
          name={"Dave"}
          time={""}
          comm={"ohhhhkay"}
          t2={"1hr"}
          img1={img[0]}
          img2={img[3]}
        />
        <Like
          name={"Medrey"}
          time={"yesterday"}
          comm={"right there"}
          t2={"1w"}
          img1={img[1]}
          img2={img[6]}
        />
        <Follow
          name={"Jerry"}
          time={"last week"}
          comm={"ohhhhkay"}
          t2={"02-07-09"}
          img1={img[2]}
          img2={img[0]}
        />
        <Like
          name={"Tom"}
          time={""}
          comm={"Red inks"}
          t2={"2w"}
          img1={img[6]}
          img2={img[5]}
        />
        <Comment
          name={"Medrey"}
          reply={"Nice retouch"}
          time={""}
          comm={"right there"}
          t2={"1w"}
          img1={img[1]}
          img2={img[6]}
        />
        <Like
          name={"Jerry"}
          time={""}
          comm={"ohhhhkay"}
          t2={"3w"}
          img1={img[2]}
          img2={img[0]}
        />
      </div>
    </motion.div>
  );
}

export default Inbox

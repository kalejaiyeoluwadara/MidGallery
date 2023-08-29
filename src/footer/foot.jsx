import React from 'react'
import "./foot.css";
import {
  AiFillHome,
  AiOutlineHome,
} from "react-icons/ai";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { BiMessageMinus, BiSolidMessageMinus } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { FaRegCompass, FaCompass } from "react-icons/fa";


function Foot({genFunct,home,disc,me,inbox}) {
  return (
    <div className="">
      <div className=" glass  py-2 px-4  flex items-center justify-between  w-screen">
        <div
          onClick={() => {
            genFunct(true, false, false, false);
          }}
          className="flex flex-col  justify-center items-center gap-1 "
        >
          {home ? (
            <AiFillHome className="" size={25} />
          ) : (
            <AiOutlineHome className="" size={25} />
          )}
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            genFunct(false, true, false, false);
          }}
          className="flex flex-col  justify-center items-center gap-1 "
        >
          {!disc ? (
            <FaRegCompass className="" size={25} />
          ) : (
            <FaCompass className="" size={25} />
          )}
          <p>Discover</p>
        </div>
        <div
          onClick={() => {
            genFunct(false, false, true, false);
          }}
          className="flex flex-col  justify-center items-center gap-1 "
        >
          {!inbox ? (
            <BiMessageMinus size={25} />
          ) : (
            <BiSolidMessageMinus size={25} />
          )}
          <p>Inbox</p>
        </div>
        <div
          onClick={() => {
            genFunct(false, false, false, true);
          }}
          className="flex flex-col = justify-center items-center gap-1 "
        >
          {!me ? (
            <BsPerson size={25} />
          ) : (
            <BsPersonFill  size={25} />
          )}
          <p>Me</p>
        </div>
      </div>
    </div>
  );
}

export default Foot

import React,{useState} from 'react'
import {
  AiFillHome,
  AiOutlineHeart,
  AiFillHeart,
  AiFillMessage,
  AiOutlineSmile,
  
} from "react-icons/ai";
import { motion,AnimatePresence } from "framer-motion";
import {
  BsChevronDown
} from "react-icons/bs";
import reply from './comment';
// {console.log(replies)}

const Msg = ({ artisticName, like, time, replies, repliesToMain,likes,pic }) => {
  return (
    <div className="flex items-center pr-2 mb-2 justify-between ">
      <div className='flex'>
        <div className=" py-3 px-3 ">
          <img
            className="h-[35px] w-[35px] rounded-full "
            src={pic}
            alt=""
          />
        </div>
        <div className="">
          <p className="font-[500] ">{artisticName}</p>
          <p className="w-[95%] ">
            {replies} <span className="opacity-[0.6]"> {time}</span>
          </p>
          <p className="flex items-center gap-1 opacity-[0.7]">
            View replies ({repliesToMain.length})
            <BsChevronDown />
          </p>
        </div>
      </div>
      <div className="flex items-center absolue left-2 flex-col  ">
        <AiOutlineHeart
          onClick={() => setLike(!like)}
          className={`text-gray-600 ${like && "text-red-500"}`}
          size={20}
        />
        <p className="text-gray-600 "> {likes} </p>
      </div>
    </div>
  );
};



function Messages({obj,setMsg}) {
 const [like,setLike] = useState(false);
  return (
    <motion.div
      initial={{
        y: "100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        y: "100vh",
      }}
      className="h-[80%] z-10 box pt-6  bg-white absolute bottom-0 w-[100%]"
    >
      <div className="flex text-[14px] mb-4 font-[600] items-center justify-center">
        <p>1.8k comments</p>
        <p
          className="absolute cursor-pointer text-[21px] right-6"
          onClick={() => {
            setMsg(false);
          }}
        >
          x
        </p>
      </div>
      <div className=" h-[100%] relative overflow-y-scroll ">
        {/* Map */}
        {reply.map((d,id) => {
          const { artisticName, likes, time, replies, repliesToMain,pic } = d;
          return (
            <Msg
            key={id}
              artisticName={artisticName}
              repliesToMain={repliesToMain}
              replies={replies}
              time={time}
              like={like}
              likes={likes}
              pic={pic}
            />
          );
        })}
      </div>

      {/* input */}
      <div className="absolute bg-white px-4 h-[50px] bottom-0 w-[100%] ">
        <div className="flex items-center h-[100%] justify-between w-[100%]  ">
          <img
            className="h-[40px] w-[40px] rounded-full "
            src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="flex relative w-[86%] items-center gap-1 font-[600] bg-gray-300 h-[80%] ">
            <input type="text" className="col" />
            <div className=" flex gap-2 items-center  absolute right-2">
              <p className="text-[25px]">@</p>
              <AiOutlineSmile size={25} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Messages;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./single.css";
import { motion, AnimatePresence } from "framer-motion";
import Controls from "./controls";
import Messages from "./messages";
import img from "./images";
import Download from "./download";
function Single({
  state,
  setState,
  obj,
  setUrlsToDisplay2,
  urlsToDisplay2,
  loading,
  setLoading
}) {
  const [msg, setMsg] = useState(false);
  const [dn, setDn] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const direction = state > 0 ? "increasing" : "decreasing";

  return (
    <div className="h-[86%]">
      <div className="flex text w-[100%] justify-center absolute top-6 gap-8 text-[20px]">
        <h1
          className="flex items-center gap-2"
          onClick={() => {
            setSearchQuery("nature");
          }}
        >
          Following <span className="bg-red-600 h-2 w-2 rounded-full"></span>
        </h1>
        <h1 className="text-white">For You</h1>
      </div>
      <AnimatePresence>
        <motion.img
          key={state}
          initial={{ y: direction === "increasing" ? "100vh" : "-100vh" }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          exit={{ y: direction === "increasing" ? "-100vh" : "100vh" }}
          onClick={() => {
            state < urlsToDisplay2.length - 1 && setState(state + 1);
          }}
          className="h-[100%] -z-20 absolute w-screen"
          src={urlsToDisplay2[state].urls.regular}
          alt=""
        />
      </AnimatePresence>
      {/* controls */}
      <Controls
        msg={msg}
        setMsg={setMsg}
        obj={obj}
        urlsToDisplay2={urlsToDisplay2}
        state={state}
        dn={dn}
        setDn={setDn}
      />
      <AnimatePresence>
        {msg && <Messages msg={msg} setMsg={setMsg} obj={obj} />}
      </AnimatePresence>
      <AnimatePresence>
        {dn && <Download dn={dn} setDn={setDn} />}
      </AnimatePresence>
      {console.log()}
      {/* image info */}
      <div className="text-white glass bg py-4 w-[100%] absolute bottom-[69px] px-2">
        <h3 className="font-[400] text-[20px] ">
          {urlsToDisplay2[state].user.name}
        </h3>
        <p className="w-[80%] font-[400]">
          {urlsToDisplay2[state].alt_description}
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Single;

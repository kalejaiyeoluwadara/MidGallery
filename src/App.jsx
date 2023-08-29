import React, { useState, useEffect } from "react";
import "./app.css";
import Inbox from "./inbox/inbox";
import View from "./me/view";
import Home from "./home/home";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Me from "./me/me";
import Foot from './footer/foot'
import Discover from "./discover/discover";
import Load from "./load";
const App = () => {
 const [home,setHome] = useState(true);
 const [view, setView] = useState(null);
const [loader,setLoader] = useState(true)
 const [disc,setDisc] = useState(false);
 const [inbox, setInbox] = useState(false);
  const [me, setMe] = useState(false);
 const genFunct = (a=true,b=false,c=false,d=false) =>{
  setHome(a)
  setDisc(b)
  setInbox(c)
  setMe(d)
 }

  return (
    <div className="relative h-screen">
      <AnimatePresence>
        {loader && <Load loader={loader} setLoader={setLoader} />}
      </AnimatePresence>
      {home && <Home genFunct={genFunct} />}
      <AnimatePresence>
        {disc && <Discover genFunct={genFunct} />}
      </AnimatePresence>
      <AnimatePresence>{inbox && <Inbox />}</AnimatePresence>
      <AnimatePresence>
        {me && <Me view={view} setView={setView} />}
      </AnimatePresence>
      <div className={`absolute bottom-0 text-${home ? "white" : "black"}`}>
        <Foot
          genFunct={genFunct}
          me={me}
          inbox={inbox}
          home={home}
          disc={disc}
        />
      </div>
      <AnimatePresence>
        {view && <View view={view} setView={setView} />}
      </AnimatePresence>
    </div>
  );

  }
export default App;

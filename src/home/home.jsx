import React, { useState, useEffect } from "react";
import "./home.css";
import Single from "./single/single";
import data from "./single/data";
import axios from "axios";
import img from "./single/images";

const Home = ({ urlsToDisplay }) => {
  const [state, setState] = useState(0);
  const [obj, setObj] = useState();
  const [urlsToDisplay2, setUrlsToDisplay2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("avengers");

  async function getUnsplashPhotos() {
    try {
      const apiKey = "02Ii8x00H9wE-22pnaphMzEeMOWACEW3z1CBeEYqldI";

      let resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=30`
      );

      if (resp.data.results) {
        setUrlsToDisplay2(resp.data.results);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setUrlsToDisplay2(img);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUnsplashPhotos();
  }, []);

  useEffect(() => {
    // Preload the next image
    if (state < urlsToDisplay2.length - 1) {
      const nextImage = new Image();
      nextImage.src = urlsToDisplay2[state + 1].urls.regular;
    }

    // Preload the previous image
    if (state > 0) {
      const prevImage = new Image();
      prevImage.src = urlsToDisplay2[state - 1].urls.regular;
    }
  }, [state, urlsToDisplay2]);


  useEffect(() => {
    // Function to generate a random object
    function generateRandomObject() {
      const randomId = data.length; // Next available ID
      const randomLikes = ((Math.random() * 70)+1).toFixed(1) + "k";
      const randomMsg = Math.floor(Math.random() * 40) + "k";
      const randomForws = Math.floor(Math.random() * 30) + "k";
      const randomDown = Math.floor(Math.random() * 20) + "k";

      const randomObject = {
        id: randomId,
        likes: randomLikes,
        msg: randomMsg,
        forws: randomForws,
        down: randomDown,
      };

      return randomObject;
    }

    // Generate a new random object on Home load
    const initialRandomObject = generateRandomObject();
    setObj(initialRandomObject);

    // Generate a new random object whenever the state changes
    const newRandomObject = generateRandomObject();
    setObj(newRandomObject);
  }, [state]);

  // Generate images from unsplash API

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute z-20 cursor-pointer top-20 h-[30%] w-[80%]"
        onClick={() => {
          if (state > 0) {
            setState(state - 1);
          }
        }}
      ></div>
      <div
        className="absolute z-20 cursor-pointer bottom-24 h-[30%] w-[80%]"
        onClick={() => {
          if (state < 30) {
            setState(state + 1);
          }
        }}
      ></div>

      <Single
        state={state}
        obj={obj}
        urlsToDisplay2={urlsToDisplay2}
        loading={loading}
        setLoading={setLoading}
        setUrlsToDisplay2={setUrlsToDisplay2}
        setState={setState}
      />
      <p></p>
    </div>
  );
};

export default Home;

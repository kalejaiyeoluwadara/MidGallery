import React, { useState, useEffect } from "react";
import axios from "axios";
import opt from "./opt";

function Slide({name,count}) {
  const [urlsToDisplay2, setUrlsToDisplay2] = useState([]);
  const [searchQuery, setSearchQuery] = useState(name);

  async function getUnsplashPhotos() {
    try {
      // IMPORTANT! Update the below variable with your own api key!!
      const apiKey = "02Ii8x00H9wE-22pnaphMzEeMOWACEW3z1CBeEYqldI";

      // making unsplash api call to search for photos based on search query
      let resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=15`
      );
      // store the array of results into urlsToDisplay2 variable
      setUrlsToDisplay2(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUnsplashPhotos();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* singles */}
        <div className="flex flex-col px-4 py-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <p className="flex border items-center justify-center font-medium text-[20px] rounded-full h-[40px] w-[40px]">
                #
              </p>
              <div>
                <p className="font-[600] capitalize text-[18px]">{name}</p>
                <p className="text-[15px] text-gray-500">Trending hashtag</p>
              </div>
            </div>
            <div className="bg-gray-300 flex items-center gap-2 font-[600] px-2 py-[2px] rounded-sm">
              <span>{count}</span>
              <span className="text-[20px] ">{">"}</span>
            </div>
          </div>
          <div className="flex overflow-x-scroll mt-4 gap-4">
            {urlsToDisplay2.map((i, id) => (
              <img
                key={id}
                className="w-[600px] h-[200px]"
                src={i.urls.small}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;

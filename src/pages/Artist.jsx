import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Artist() {
  const [artist, setArtist] = useState({});
  const query = useParams();
  const getArtist = async () => {
    const api = await fetch(
      `https://bing-image-search1.p.rapidapi.com/images/search?q={${query.artist}}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "a6a50747c6msh3b9df5163dc6c28p1bb422jsn7f9f8d1462fc",
        },
      }
    );
    const data = await api.json();
    localStorage.setItem(`artist/${query.artist}`);
    console.log(data);
    setArtist(data);
  };
  useEffect(() => {
    getArtist();
  });
  return (
    <div>
      <div className="bg-grey-200 rounded-md m-2 p-3 felx felx-col                                                                                        items-center">

      </div>
    </div>
  );
}

export default Artist;

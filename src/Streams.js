import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./api";

const Streams = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`https://api.twitch.tv/kraken/streams/`);
      console.log(response);
      setGames(response.data.streams);
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="streams-container">
        {games.map((game) => {
          return (
            <Link to={`/${game.channel.display_name}/${game.channel._id}`}>
              <div className="stream" key={game._id}>
                <div className="thumbnail">
                  <img src={game.preview.large} alt="" />
                </div>
                <div className="title">
                  <h2>{game.channel.status.substring(0, 40)}...</h2>
                  <p>{game.channel.name}</p>
                  <p>{game.channel.game}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Streams;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./api";

const Player = () => {
  const { title, id } = useParams();
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `https://api.twitch.tv/kraken/channels/${id}`
      );
      setChannel(response.data);
    }
    fetchData();
  }, [id]);

  const handleSubmit = () => {
    let array = JSON.parse(localStorage.getItem("Data") || "[]");
    array.push(channel);
    localStorage.setItem("Data", JSON.stringify(array));
  };

  return (
    <section>
      <div className="player-container">
        <iframe
          className="player"
          key={channel._id}
          src={`https://player.twitch.tv/?channel=${title}&parent=localhost&muted=true`}
          height="90%"
          width="90%"
          allowfullscreen="true"
        ></iframe>
        <div className="player-info">
          <div className="positioning">
            <div className="stream-logo">
              <img src={channel.logo} alt={title} />
            </div>
            <div className="stream-title">
              <h2>{title}</h2>
              <p>{channel.status}</p>
              <p className="stream-game">{channel.game}</p>
            </div>
          </div>
          <div className="stream-info">
            <button className="follow-stream" onClick={() => handleSubmit()}>
              Follow
            </button>
            <div className="stream-views">
              <i class="viewers fas fa-user-friends"></i>
              <p>{channel.views}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;

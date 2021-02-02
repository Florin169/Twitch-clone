import React, { useState, useEffect } from "react";
import api from "./api";
import { Link } from "react-router-dom";

const FollowList = () => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `https://api.twitch.tv/kraken/streams/?limit=6`
      );
      console.log(response);
      setRecommended(response.data.streams);
    }
    fetchData();
  }, []);

  const followed = JSON.parse(localStorage.getItem("Data"));
  console.log(followed);

  return (
    <section>
      <div className="follow">
        <i class="rec-ch fas fa-long-arrow-alt-right"></i>
        <p className="rec-text">FOLLOWED CHANNELS</p>
        {followed.map((follow) => {
          return (
            <div className="follow-user">
              <div className="user-logo">
                <img src={follow.logo} alt="" />
              </div>
              <div className="info">
                <h1>{follow.name}</h1>
                <p>{follow.game}</p>
              </div>
            </div>
          );
        })}
        <i class="rec-ch fas fa-video"></i>
        <p className="rec-text">RECOMMENDED CHANNELS</p>
        {recommended.map((stream) => {
          return (
            <Link to={`/${stream.channel.display_name}/${stream.channel._id}`}>
              <div className="recommended-user" key={stream._id}>
                <div className="user-logo">
                  <img src={stream.channel.logo} alt="" />
                </div>
                <div className="info">
                  <h1>{stream.channel.display_name}</h1>
                  <p>{stream.channel.game}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FollowList;

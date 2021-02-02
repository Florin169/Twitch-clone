import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./api";
import { Link } from "react-router-dom";

const GameStreams = () => {
  const [streams, setStreams] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${id}`
      );
      setStreams(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="streams-container">
        {streams.map((stream) => {
          return (
            <Link to={`/${stream.user_name}/${stream.user_id}`}>
              <div className="stream" key={stream.id}>
                <div className="thumbnail">
                  <img
                    src={stream.thumbnail_url
                      .replace("{width}", 370)
                      .replace("{height}", 200)}
                    alt=""
                  />
                </div>
                <div className="title">
                  <h2>{stream.title.substring(0, 40)}...</h2>
                  <p>{stream.user_name}</p>
                  <p>{stream.game_name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GameStreams;

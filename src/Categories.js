import React, { useState, useEffect } from "react";
import api from "./api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `https://api.twitch.tv/kraken/games/top?limit=30`
      );
      setCategories(response.data.top);
    }
    fetchData();
  }, []);
  return (
    <section>
      <div className="browse">
        {categories.map((game) => {
          return (
            <Link to={`/streams/${game.game.name}/${game.game._id}`}>
              <div className="card" key={game.game._id}>
                <img src={game.game.box.large} alt="" />
                <h2>{game.game.localized_name}</h2>
                <p>{game.viewers} viewers</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

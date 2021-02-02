import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import FollowList from "./FollowList";
import Streams from "./Streams";
import Categories from "./Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api";
import Player from "./Player";
import GameStreams from "./GameStreams";

const App = () => {
  return (
    <section>
      <Router>
        <NavBar />
        <div className="side-by-side">
          <FollowList />
          <Route exact path="/">
            <Streams />
          </Route>
        </div>
        <Route exact path="/browse">
          <Categories />
        </Route>
        <Route exact path="/:title/:id">
          <Player />
        </Route>
        <Route exact path="/streams/:game/:id">
          <GameStreams />
        </Route>
      </Router>
    </section>
  );
};

export default App;

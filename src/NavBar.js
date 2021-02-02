import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section>
      <nav>
        <div className="nav-categories">
          <Link to="/">
            <i className="logo fab fa-twitch"></i>
          </Link>
          <h2>Following</h2>
          <Link to="/browse">
            <h2>Browse</h2>
          </Link>
          <h2>Esports</h2>
          <h2>Music</h2>
        </div>
        <form action="">
          <input type="text" placeholder="Search" />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div className="nav-icons">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>
          <div className="bits">
            <i className="fas fa-gem"></i>
            <p>Gets Bits</p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;

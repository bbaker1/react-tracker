import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="item">
      <i className="react icon"></i>
        Tracker
      </Link>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/tasks" className="item">
        List
      </Link>
      <Link to="/tasks/graph" className="item">
        Graph
      </Link>
      <div className="right menu">
        <div className="item">
          <GoogleAuth />
        </div>
        <div className="item">
          <a
            href="https://www.linkedin.com/in/benjamin-baker-02004b138/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg" />
          </a>
        </div>
        <div className="item">
          <a
            href="https://github.com/bbaker1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

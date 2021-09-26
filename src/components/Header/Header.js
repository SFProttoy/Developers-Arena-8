import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="dev-header">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="title">Developers Arena</h1>
          <h3 className="title">Make the best team !</h3>
          <h2 className="title">Total Budget: $ 1Mn</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

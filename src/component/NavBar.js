import React from "react";

const NavBar = ({ brand }) => {
  return (
    <nav className="navBar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

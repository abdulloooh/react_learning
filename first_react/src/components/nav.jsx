import React from "react"; //imr only now since render mtd of class Component from imrc isn't needed

//Stateless functional component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Total
        <span className="badge badge-pill badge-primary m-1">
          {props.total}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;

import React from "react"; //imr only now since render mtd of class Component from imrc isn't needed

//Stateless functional component

const NavBar = ({ total }) => {
  //Destructuring arguments, what we simply did here is const {total} = props

  //NB: lifecycle hooks can only be use on cc and not sfc
  console.log("NavBar - rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Total
        <span className="badge badge-pill badge-primary m-1">{total}</span>
      </span>
    </nav>
  );
};

export default NavBar;

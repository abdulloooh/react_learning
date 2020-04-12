import React from "react";
//interface  input: like status and handle like click   output: heart with plain or black bg
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o"; //because the value is undefined by default, it will be plain
  return (
    <i
      className={classes}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;

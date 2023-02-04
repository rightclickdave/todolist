import React from "react";

function Header(props) {
  return (
    <h1 className="title">
      {props.title}
      <span>{props.subtitle}</span>
    </h1>
  );
}

export default Header;

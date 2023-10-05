import React from "react";

const Nav = (props) => {
  console.log(props.l);
  const k = props.l;
  return <div className=" ">Navigation{k}</div>;
};

export default Nav;

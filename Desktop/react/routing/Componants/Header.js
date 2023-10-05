import React, { useContext } from "react";
import Nav from "./Nav";
import { MyContext } from "@/app/Helper/Context";

const Header = (props) => {
  const user = useContext(MyContext);
  const n = props.num;
  return (
    <>
      <div className="p-5 bg-red-500 ">
        Header Green {user}
        <Nav l={n} />
      </div>
    </>
  );
};

export default Header;

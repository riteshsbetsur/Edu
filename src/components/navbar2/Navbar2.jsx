import React from "react";
import Styles from "./_navbar2.module.css";
import Menu2 from "./Menu2";

import SignInUp from "./SignInUp";
import UseMenu from "./Menu3";
import Menu1 from "./Menu1";

const Navbar2 = () => {
  return (
    <div className={Styles.geeks1}>
      {/* <Menu1/> */}
      <Menu2 />
      {/* <UseMenu/> */}
      <SignInUp />
    </div>
  );
};

export default Navbar2;

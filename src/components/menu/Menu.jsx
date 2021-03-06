import React from "react";
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  return (
    <div>
      <>
        <Header />
        <Search />
        <Conversations />
      </>
    </div>
  );
};

export default Menu;

import React from "react";
import headerStyle from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={headerStyle.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={headerStyle["main-image"]}>
        <img src={sushiImage} alt="япона кухня" />
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import SocialIcons from "./SocialIcons";
import Logo from "../components/Logo";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner-container">
        <Logo></Logo>
        <div className="par-section"></div>
        <SocialIcons></SocialIcons>
      </div>
    </footer>
  );
};

export default Footer;

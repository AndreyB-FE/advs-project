import React from "react";
import "../styles/socialIcons.scss";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div className="social-icon facebook">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="social-icon">
        <i className="fab fa-instagram"></i>
      </div>
      <div className="social-icon">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="social-icon">
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default SocialIcons;

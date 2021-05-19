import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const navLinks = ["About", "Contact Us", "Categories"];
  return (
    <nav className="links">
      <ul>
        {navLinks.map((link, id) => {
          return (
            <li key={id}>
              <Link to={`/${link.replace(/\s/g, "").toLocaleLowerCase()}`}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;

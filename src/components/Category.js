import React from "react";
import "../styles/category.scss";

const Category = (props) => {
  const { name, description, image } = props;
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="name">{name}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Category;

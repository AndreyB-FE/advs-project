import React from "react";

const Category = (props) => {
  const { name, description, image } = props;
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="name">{name}</div>
      <p className="description">{description}</p>
      {/* <img src={image} alt="" /> */}
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import Category from "./Category";

const ItemContainer = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="item-container">
      {categories &&
        categories.map((category) => {
          return <Category key={category.id} {...category}></Category>;
        })}
    </div>
  );
};

export default ItemContainer;

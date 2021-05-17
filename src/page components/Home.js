import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryContainer from "../components/CategoryContainer";

const Home = () => {
  return (
    <div className="container pw-2">
      <Header></Header>
      <CategoryContainer></CategoryContainer>
      <Footer></Footer>
    </div>
  );
};

export default Home;

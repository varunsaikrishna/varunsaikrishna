import React from "react";
import "./home.css";
import Header from "../header/index";
// import Socialb from "../socialb";
import Footer from "../footer/index";
import Body from "../body/index";
import Socialicons from "../sidebar/index";

function Home() {
  return (
    <div className="home">
      <Header />
      <Socialicons />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;

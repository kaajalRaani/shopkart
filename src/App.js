import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import NewProducts from "./Components/NewProducts";
import Footer from "./Components/ Footer";

const App = () => {
  return (
    <div className="main-div">
      <Header />
      <Navbar />
      <Intro />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default App;

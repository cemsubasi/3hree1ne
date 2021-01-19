import React from "react";
import Header from "../../common/Header";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import HomeFeaturedPosts from "./HomeFeaturedPosts";
import HomeMainPosts from "./HomeMainPosts";

function HomePageContainer() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <HomeFeaturedPosts />
      <HomeMainPosts />
      <Footer />
    </div>
  );
}

export default HomePageContainer;

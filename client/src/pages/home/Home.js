import React from "react";
import HomeFeaturedPosts from "./HomeFeaturedPosts";
import HomeMainPosts from "./HomeMainPosts";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

function HomePageContainer() {
	return (
		<>
			<Header />
			<Banner />
			<HomeFeaturedPosts />
			<HomeMainPosts />
			<Footer />
		</>
	);
}

export default HomePageContainer;

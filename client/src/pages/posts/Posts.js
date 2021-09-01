import React from "react";
import PostsBody from "./PostsBody";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

function PostsPageContainer() {
	return (
		<div className="container">
			<Header />
			<PostsBody />
			<Footer />
		</div>
	);
}
export default PostsPageContainer;

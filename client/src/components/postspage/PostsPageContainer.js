import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import PostsBody from "./PostsBody";

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

import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import AlbumBody from "./AlbumBody";

function AlbumPageContainer() {
  return (
    <div className="container">
      <Header />
      <AlbumBody />
      <Footer />
    </div>
  );
}
export default AlbumPageContainer;

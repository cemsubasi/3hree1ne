import React from "react";
import AlbumBody from "./AlbumBody";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

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

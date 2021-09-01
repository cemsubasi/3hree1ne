import React from "react";
import ArchiveBody from "./ArchiveBody";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const ArchivePageContainer = () => {
	return (
		<div className="container">
			<Header />
			<ArchiveBody />
			<Footer />
		</div>
	);
};

export default ArchivePageContainer;

import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ArchiveBody from "./ArchiveBody";

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

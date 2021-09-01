import React from "react";
import DummyBody from "./DummyBody";
import DummyShowComments from "./DummyShowComments";
import DummyWriteComment from "./DummyWriteComment";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const DummyPageContainer = () => {
	return (
		<div className="container">
			<Header />
			<DummyBody />
			<DummyShowComments />
			<div className="pt-5">
				<h3 className="text-center">Add a comment</h3>
				<DummyWriteComment />
			</div>
			<Footer />
		</div>
	);
};

export default DummyPageContainer;

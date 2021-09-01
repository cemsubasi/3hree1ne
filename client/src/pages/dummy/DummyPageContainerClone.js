import React from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import DummyShowComments from "./DummyShowComments";
import DummyWriteComment from "./DummyWriteComment";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const DummyPageContainer = (props) => {
	let { slug } = useParams();
	const dummyObj = props.state.find((item) => item.postUrl === slug);
	return dummyObj !== undefined ? (
		<div className="container">
			<Header />
			<div className="container pt-4 m-auto p-5">
				<h2 className="text-center pb-4">{dummyObj.postHeader}</h2>
				<div>{parse(dummyObj.postBody)}</div>
				<p
					className="border-bottom pb-5"
					style={{ textAlign: "right", color: "#9FA4A7" }}
				>
					{dummyObj.date}
				</p>
				<DummyShowComments />
				<div className="pt-5">
					<h3 className="text-center">Add a comment</h3>
					<DummyWriteComment />
				</div>
			</div>
			<Footer />
		</div>
	) : null;
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(DummyPageContainer);

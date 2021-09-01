import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";

const DummyBody = (props) => {
	let { slug } = useParams();
	console.log(slug);
	return props.state
		.filter((item) => item.postUrl === "slug/" + slug)
		.map((item) => (
			<div key={item.postUrl} className="container">
				<div className="container pt-4 m-auto p-5">
					<h2 className="text-center pb-4" tabIndex="0">
						{item.postHeader}
					</h2>
					<div>{parse(item.postBody)}</div>
					<p
						className="border-bottom pb-5"
						style={{ textAlign: "right", color: "#9FA4A7" }}
					>
						{item.date}
					</p>
				</div>
			</div>
		));
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(DummyBody);

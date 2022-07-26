import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const DummyShowComments = (props) => {
	let { pathname } = useLocation();

	return (
		<div className="p-5">
			<h2 className="text-center pb-4">Comments</h2>
			{props.state
				.filter((item) => item.postUrl === pathname.substring(1))
				.map((item, index) =>
					item.comments.length > 0 ? (
						item.comments.map((i, index) => (
							<div
								key={index}
								className="container text-center border pt-2"
								style={{
									backgroundColor: "#F9F9F9",
									maxWidth: "650px",
									width: "100%",
									margin: "auto",
								}}
							>
								<h5 className="text-break">@{i.userName}</h5>
								<p className="text-break">{i.userComment}</p>
								<p className="text-end text-muted m-1">{i.date}</p>
							</div>
						))
					) : (
						<h4 key={index} className="text-center">
							No comment yet
						</h4>
					)
				)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};
export default connect(mapStateToProps)(DummyShowComments);

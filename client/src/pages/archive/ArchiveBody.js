import parse from "html-react-parser";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { parseDateToArchiveFormat, parseURLToDate } from "../../config";

const ArchiveBody = (props) => {
	const { slug } = useParams();
	return (
		<div className="container row mx-0">
			<div className="row row-cols-1 row-cols-lg-2 mx-0">
				{props.state
					.filter((each) =>
						parseDateToArchiveFormat(each.date).includes(parseURLToDate(slug))
					)
					.map((user) => (
						<div key={user.postUrl} className="my-4 col ">
							<div className="card text-center">
								<div className="card-header">
									<h2>{user.postHeader}</h2>
								</div>
								<div className="card-body">
									<div className="card-text">
										{user.postBody.length > 200
											? parse(user.postBody.slice(0, 200) + " ...")
											: parse(user.postBody)}
									</div>
									<Link to={user.postUrl} className="btn btn-primary">
										Read More
									</Link>
								</div>
								<div className="card-footer text-muted">{user.date}</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(ArchiveBody);

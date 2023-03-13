import parse from "html-react-parser";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { secret } from "../../config";

const PostsBody = (props) => {
	const [inputState, setInputState] = useState("");
	const inputStateHandler = (e) => {
		setInputState(e.target.value);
	};
	const focusRef = useRef();
	useEffect(() => focusRef.current && focusRef.current.focus(), []);
	return (
		<div className="container row mx-0">
			<div className="p-3">
				<input
					type="text"
					className="form-control m-auto "
					ref={focusRef}
					style={{ maxWidth: "450px", margin: "auto" }}
					name="filter"
					value={inputState}
					onChange={inputStateHandler}
					id="exampleFormControlInput1"
					placeholder="Search in posts"
				/>
			</div>
			{inputState === secret && <Redirect to="/punchvenegro" />}
			<div className="row row-cols-1 row-cols-lg-2 mx-0">
				{props.state
					.filter(
						(user) =>
							user.postBody.toLowerCase().includes(inputState.toLowerCase()) ||
							user.postHeader.toLowerCase().includes(inputState.toLowerCase())
					)
					.map(
						(user) =>
							user.isActive && (
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
											<Link to={`${user.postUrl}`} className="btn btn-primary">
												Read More
											</Link>
										</div>
										<div className="card-footer text-muted">{user.date}</div>
									</div>
								</div>
							)
					)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		isAdmin: state.isAdmin,
	};
};
export default connect(mapStateToProps)(PostsBody);

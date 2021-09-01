import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAdmin } from "./LoginAction";
import { url3 } from "../../config";

import logo from "../../images/logo1.svg";

const LoginBody = (props) => {
	const [auth, setAuth] = useState({ username: "", password: "" });
	const setAuthHandler = (e) => {
		setAuth({ ...auth, [e.target.id]: e.target.value });
	};

	return (
		<div className="LoginBody">
			<div className="form-signin">
				<img className="mb-4" src={logo} alt="" width="150" height="120" />
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
				<form>
					<label htmlFor="username" className="visually-hidden">
						Username
					</label>
					<input
						type="text"
						id="username"
						className="form-control"
						value={auth.userName}
						onChange={setAuthHandler}
						placeholder="Username"
						required
						autoFocus
					/>
					<label htmlFor="inputPassword" className="visually-hidden">
						Password
					</label>
					<input
						type="password"
						id="password"
						className="form-control mb-5"
						value={auth.password}
						onChange={setAuthHandler}
						placeholder="Password"
						required
					/>
					<Link to={url3}>
						<button
							className="w-100 btn btn-lg "
							onClick={() => props.setAdmin(auth)}
							style={{ background: "#FFAB00" }}
							type="submit"
						>
							{" "}
							Sign in{" "}
						</button>
					</Link>
				</form>
				<p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		isAdmin: state.isAdmin,
		errMessage: state.errMessage,
	};
};

export default connect(mapStateToProps, { setAdmin })(LoginBody);

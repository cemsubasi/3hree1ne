import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./about/About";
import Album from "./album/Album";
import Archive from "./archive/Archive";
import Dummy from "./dummy/Dummy";
import Home from "./home/Home";
import Login from "./login/Login";
import Posts from "./posts/Posts";
import Super from "./super/Super";
import Page404 from "../common/404";
import { url3 } from "../config";

const RouteComponent = (props) => {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/posts" component={Posts} />
					<Route path="/album" component={Album} />
					<Route path="/about" component={About} />
					<Route
						path={url3}
						render={() => (props.isAdmin === true ? <Super /> : <Login />)}
					/>
					<Route path="/archive/slug/:slug" component={Dummy} />
					<Route path="/slug/:slug" component={Dummy} />
					<Route path="/archive/:slug" component={Archive} />
					<Route path="*" component={Page404} />
				</Switch>
			</div>
		</Router>
	);
};
const mapStateToProps = (state) => {
	return {
		isAdmin: state.isAdmin,
	};
};

export default connect(mapStateToProps)(RouteComponent);

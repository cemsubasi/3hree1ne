import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SuperPageContainer from "./super/SuperPageContainer";
import HomePageContainer from "./home/HomePageContainer";
import DummyPageContainer from "./dummy/DummyPageContainer";
import LoginPageContainer from "./login/LoginPageContainer";
import AlbumPageContainer from "./album/AlbumPageContainer";
import AboutPageContainer from "./about/AboutPageContainer";
import PostsPageContainer from "./posts/PostsPageContainer";
import ArchivePageContainer from "./archive/ArchivePageContainer";
import Page404 from "../common/404";
import { url3 } from "../config";

const RouteComponent = (props) => {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomePageContainer} />
					<Route path="/posts" component={PostsPageContainer} />
					<Route path="/album" component={AlbumPageContainer} />
					<Route path="/about" component={AboutPageContainer} />
					<Route
						path={url3}
						render={() =>
							props.isAdmin === true ? (
								<SuperPageContainer />
							) : (
								<LoginPageContainer />
							)
						}
					/>
					<Route path="/archive/slug/:slug" component={DummyPageContainer} />
					<Route path="/slug/:slug" component={DummyPageContainer} />
					<Route path="/archive/:slug" component={ArchivePageContainer} />
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
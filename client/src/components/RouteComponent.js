import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SuperPageContainer from "./superpage/SuperPageContainer";
import HomePageContainer from "./homepage/HomePageContainer";
import DummyPageContainer from "./dummypage/DummyPageContainer";
import LoginPageContainer from "./loginpage/LoginPageContainer";
import AlbumPageContainer from "./albumpage/AlbumPageContainer";
import AboutPageContainer from "./aboutpage/AboutPageContainer";
import PostsPageContainer from "./postspage/PostsPageContainer";
import ArchivePageContainer from "./archivepage/ArchivePageContainer";
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

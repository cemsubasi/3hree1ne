import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SuperPageContainer from "./superpage/SuperPageContainer";
import HomePageContainer from "./homepage/HomePageContainer";
import DummyPageContainer from "./dummypage/DummyPageContainer";
import LoginPageContainer from "./loginpage/LoginPageContainer";
import AlbumPageContainer from "./albumpage/AlbumPageContainer";
import AboutPageContainer from "./aboutpage/AboutPageContainer";
import PostsPageContainer from "./postspage/PostsPageContainer";
import { url3 } from "../Data";

const RouteComponent = (props) => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" children={<HomePageContainer />} />
          <Route path="/posts" children={<PostsPageContainer />} />
          <Route path="/album" children={<AlbumPageContainer />} />
          <Route path="/about" children={<AboutPageContainer />} />
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
          <Route path="/:slug" children={<DummyPageContainer />} />
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

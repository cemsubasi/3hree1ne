import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPhotos } from "./pages/album/AlbumAction";
import { fetchPosts } from "./pages/home/HomeAction";
import RouteComponent from "./pages/RouteComponent";

import "./css/client.css";
import "./css/blog.css";
import "./css/signin.css";

const Client = (props) => {
	useEffect(() => {
		props.fetchPosts();
		props.fetchPhotos();
	}, []);

	return <RouteComponent />;
};

export default connect(null, { fetchPosts, fetchPhotos })(Client);

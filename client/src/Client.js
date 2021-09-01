import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPhotos } from "./components/albumpage/AlbumAction";
import { fetchPosts } from "./components/homepage/HomeAction";
import RouteComponent from "./components/RouteComponent";

import "./css/client.css";
import "./css/blog.css";
import "./css/signin.css";

const Client = (props) => {
	useEffect(
		() => {
			props.fetchPosts();
			props.fetchPhotos();
		},
		[]
	);

	return <RouteComponent />;
};

export default connect(null, { fetchPosts, fetchPhotos })(Client);

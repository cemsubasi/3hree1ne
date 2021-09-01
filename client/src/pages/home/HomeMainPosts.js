import parse from "html-react-parser";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	homePageTitle,
	homeAboutHead,
	homeAboutBody,
	instagram,
	parseDateToArchiveFormat,
	parseDateToURL,
} from "../../config";

const HomeMainPosts = (props) => {
	//archives
	let arr = [];
	props.state.forEach((each, index, self) =>
		arr.indexOf(each) === -1 &&
		arr.every(
			(e) =>
				parseDateToArchiveFormat(e.date) !== parseDateToArchiveFormat(each.date)
		)
			? arr.push(each)
			: null
	);

	// pageState contains homepage main post number
	// it starts with 2 and increase when the older button clicked

	const [pageState, setPageState] = useState(2);
	const pageStateHandler = () => {
		setPageState(() =>
			props.state.length > pageState ? pageState + 1 : pageState
		);
	};

	// this state contains homepage main post objects
	// starts with number of init pageState and if pageState increases then stateMainPage takes
	// that much object from the state
	const [stateMainPage, setStateMainPage] = useState([]);
	const pagingHandler = () => {
		setStateMainPage(props.state.filter((item, index) => index < pageState));
	};
	useEffect(
		pagingHandler,
		// eslint-disable-next-line
		[props.state, pageState]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<h3 className="pb-4 mb-4 font-italic border-bottom">
						{homePageTitle}
					</h3>

					{stateMainPage.map((item) => (
						<div className="blog-post" key={item.postUrl}>
							<h2 className="blog-post-title">
								<Link to={`/${item.postUrl}`}>{item.postHeader}</Link>
							</h2>
							<p className="blog-post-meta">
								{item.date} by <Link to="/about">{item.author}</Link>
							</p>
							<div>{parse(item.postBody)}</div>
						</div>
					))}
					<nav className="blog-pagination" aria-label="Pagination">
						<button
							className="btn btn-outline-primary"
							onClick={pageStateHandler}
						>
							Older
						</button>
						<a
							className="btn btn-outline-secondary disabled"
							href="/"
							tabIndex="-1"
							aria-disabled="true"
						>
							Random
						</a>
					</nav>
				</div>
				<div className="col-md-4">
					<div className="p-4 mb-3 bg-light rounded">
						<h4 className="font-italic">{homeAboutHead}</h4>
						<p className="mb-0">{homeAboutBody}</p>
					</div>

					<div className="p-4">
						<h4 className="font-italic">Archives</h4>
						<ol className="list-unstyled mb-0">
							{arr.map((e) => (
								<li key={e.id}>
									<Link to={`/archive/${parseDateToURL(e.date)}`}>
										{parseDateToArchiveFormat(e.date)}
									</Link>
								</li>
							))}
						</ol>
					</div>
					<div className="p-4">
						<h4 className="font-italic">Elsewhere</h4>
						<ol className="list-unstyled">
							<li>
								<a href={instagram} target="_alt">
									Instagram
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};
export default connect(mapStateToProps)(HomeMainPosts);

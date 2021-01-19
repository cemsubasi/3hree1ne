import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";

const HomeMainPosts = (props) => {
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
            With love from the 31
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
              onClick={pageStateHandler}>
              Older
            </button>
            <a
              className="btn btn-outline-secondary disabled"
              href="/"
              tabIndex="-1"
              aria-disabled="true">
              Random
            </a>
          </nav>
        </div>
        <div className="col-md-4">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
              mattis consectetur purus sit amet fermentum. Aenean lacinia
              bibendum nulla sed consectetur.
            </p>
          </div>

          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li>
                <a href="/">January 2021</a>
              </li>
              <li>
                <a href="/">December 2020</a>
              </li>
              <li>
                <a href="/">November 2020</a>
              </li>
              <li>
                <a href="/">October 2020</a>
              </li>
            </ol>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li>
                <a href="https://www.github.com/cemsubasi" target="_alt">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cemsubasi/" target="_alt">
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

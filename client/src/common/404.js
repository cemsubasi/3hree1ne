import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="container">
      {/* Bootstrap Navbar */}
      <div>
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link to="/posts" className="link-secondary" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24">
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link
                to="/"
                className="blog-header-logo text-dark d-none d-sm-block">
                Kadun
              </Link>
              <Link to="/" className="blog-header-logo text-dark ">
                <div className="d-sm-none" style={{ fontSize: "20px" }}>
                  Kadun
                </div>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <button className="btn btn-sm btn-outline-secondary" disabled>
                Subscribe
              </button>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <Link to="/" className="p-2 link-secondary">
              Home
            </Link>
            <Link to="/posts" className="p-2 link-secondary">
              Posts
            </Link>
            <Link to="/album" className="p-2 link-secondary">
              Album
            </Link>
            <Link to="/about" className="p-2 link-secondary">
              About
            </Link>
          </nav>
        </div>
      </div>
		<div className="text-center m-0auto py-5">
		<h1 >404 Page Not Found!</h1>
		</div>
    </div>
  );
};

export default Page404;

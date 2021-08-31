import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";
import Punch from "../../images/punch.svg";
import Negro from "../../images/negro.svg";

const HomeFeaturedPosts = (props) => {
  return (
    <div className="container">
      <div className="row mb-2">
        {props.state.map((item) =>
          item.featured ? (
            <div className="col-md-6" key={item.postUrl}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    {item.category}
                  </strong>
                  <h3 className="mb-0">{item.postHeader}</h3>
                  <div className="mb-1 text-muted">{item.date}</div>
                  <div className="card-text mb-auto">
                    {item.postBody.length > 100
                      ? parse(item.postBody.slice(0, 90) + " ...")
                      : parse(item.postBody)}
                  </div>
                  <Link to={`/${item.postUrl}`} className="stretched-link">
                    Continue reading
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src={item.thumbnail === "Negro" ? Negro : Punch}
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};
export default connect(mapStateToProps)(HomeFeaturedPosts);

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const PostsBody = (props) => {
  const [inputState, setInputState] = useState("");
  const inputStateHandler = (e) => {
    setInputState(e.target.value);
  };
  return (
    <div className="container row">
      <div className="p-3">
        <input
          type="text"
          className="form-control m-auto "
          style={{ width: "450px", margin: "auto" }}
          name="filter"
          value={inputState}
          onChange={inputStateHandler}
          id="exampleFormControlInput1"
          placeholder="Search in posts"
        />
      </div>
      <div className="row row-cols-1 row-cols-lg-2">
        {props.state
          .filter(
            (user) =>
              user.postBody.toLowerCase().includes(inputState.toLowerCase()) ||
              user.postHeader.toLowerCase().includes(inputState.toLowerCase())
          )
          .map((user) => (
            <div key={user.postUrl} className="my-4 col ">
              <div className="card text-center">
                <div className="card-header">
                  <h2>{user.postHeader}</h2>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    {user.postBody.length > 200
                      ? parse(user.postBody.slice(0, 200) + " ...")
                      : parse(user.postBody)}
                  </div>
                  <Link to={`${user.postUrl}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
                <div className="card-footer text-muted">{user.date}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};
export default connect(mapStateToProps)(PostsBody);

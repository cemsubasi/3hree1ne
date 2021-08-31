import React from "react";
import { connect } from "react-redux";
import { addPost, deletePost, featuredPost, editPost } from "./SuperAction";
import { Link } from "react-router-dom";

const SuperList = (props) => {
  return (
    <div className="container">
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Header</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Star</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((user, index) => (
            <tr key={user.postUrl}>
              <th scope="row">{index}</th>
              <td>
                <Link to={`/${user.postUrl}`}>{user.postHeader}</Link>
              </td>
              <td>{user.date}</td>
              <td>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => {
                    props.editPost(user.postUrl);
                  }}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className={
                    user.featured
                      ? "btn btn-outline-danger btn-sm"
                      : "btn btn-outline-success btn-sm"
                  }
                  onClick={() => props.featuredPost(user)}>
                  {user.featured ? "Pull" : "Push"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => {
                    props.deletePost(user.postUrl);
                  }}>
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
    editState: state.editState,
    errState: state.errState,
  };
};

export default connect(mapStateToProps, {
  addPost,
  deletePost,
  featuredPost,
  editPost,
})(SuperList);

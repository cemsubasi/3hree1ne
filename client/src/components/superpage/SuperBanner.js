import { connect } from "react-redux";
import { choose } from "./SuperAction";

const SuperBanner = (props) => {
  return (
    <section className="py-2 text-center container border-bottom">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h2 className="fw-light">Super Page</h2>
          <p>
            <button
              className="btn btn-light my-2 "
              onClick={() => props.choose("post")}
              style={{ width: "200px", backgroundColor: "#FFAB00" }}>
              Post
            </button>
            <button
              className="btn btn-dark my-2 "
              onClick={() => props.choose("photo")}
              style={{ width: "200px" }}>
              Photo
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
export default connect(null, { choose })(SuperBanner);

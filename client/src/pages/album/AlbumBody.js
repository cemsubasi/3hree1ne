import React, { useState } from "react";
import { connect } from "react-redux";

function AlbumBody(props) {
  const [state, setState] = useState("Ben");
  return (
    <div className="container">
      <main>
        <section className="py-5 text-center container border-bottom">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album Page</h1>
              <p className="lead text-muted pt-2">
                {/* {Note} */}
                Let's see what i like to share with you
                {/* {Note} */}
              </p>
              <p>
                <button
                  className="btn btn-light my-2"
                  style={{ width: "200px", backgroundColor: "#FFAB00" }}
                  onClick={() => setState("Ben")}>
									Ben
                </button>
                <button
                  className="btn btn-dark my-2"
                  style={{ width: "200px" }}
                  onClick={() => setState("Onlar")}>
									Onlar
                </button>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light ">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 px-0">
              {props.state.map((item, index) =>
                item.category === state ? (
                  <div key={index} 
									className="card col shadow-sm px-0 m-auto  mb-4"
									style={{maxWidth: '238px'}}
									>
                    <img
                      src={item.data_url}
                      className="bd-placeholder-img mt-0"
                      style={{ maxWidth: "238px" }}
                      height="300"
                      alt=""
                    />

                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary">
                            Like
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary">
                            Comment
                          </button>
                        </div>
                        <small className="text-muted">{item.date}</small>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </main>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state.photoState,
		tost: state,
  };
};

export default connect(mapStateToProps)(AlbumBody);

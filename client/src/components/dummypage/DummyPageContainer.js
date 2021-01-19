import React from "react";
import { connect } from "react-redux";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import DummyWriteComment from "./DummyWriteComment";
import DummyShowComments from "./DummyShowComments";
import DummyBody from "./DummyBody";

const DummyPageContainer = (props) => {
  console.log(props);
  return (
    <div className="container">
      <Header />
      <DummyBody />
      <DummyShowComments />
      <div className="pt-5">
        <h3 className="text-center">Add a comment</h3>
        <DummyWriteComment />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};

export default connect(mapStateToProps)(DummyPageContainer);

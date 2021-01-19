import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "./DummyAction";
import { dateParsed } from "../../Data";

const DummyWriteComment = (props) => {
  let { slug } = useParams();
  const [comment, setComment] = useState({
    userName: "Anonymous",
    userComment: "",
    date: dateParsed,
  });
  const commentHandler = (e) =>
    setComment({ ...comment, [e.target.name]: e.target.value.slice(0, 180) });

  const commentClear = () =>
    setComment({
      userName: "Anonymous",
      userComment: "",
      date: dateParsed,
    });

  return (
    <div className="py-3" style={{ maxWidth: "650px", margin: "auto" }}>
      <div>
        <InputGroup
          className="mb-3"
          style={{ maxWidth: "450px", margin: "auto" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={comment.userName}
            name="userName"
            onChange={commentHandler}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="py-4">Comment</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            value={comment.userComment}
            name="userComment"
            rows="2"
            onChange={commentHandler}
            aria-label="Comment"
          />
        </InputGroup>
      </div>
      <div className="m-auto py-4 text-center">
        <Button
          size="lg"
          onClick={() => {
            props.addComment({ postUrl: slug, comment: comment });
            commentClear();
          }}
          variant="outline-dark">
          Send
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};
export default connect(mapStateToProps, { addComment })(DummyWriteComment);

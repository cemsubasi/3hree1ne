import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SuperModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>You will edit a post! Are you sure?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Yes</Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SuperModal;

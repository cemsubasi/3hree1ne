import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { connect } from "react-redux";
// import { replacePost } from "./SuperAction";

function SuperModal({inputstate, seterr, replacepost, texthandler, inputstateclear, editpost, ...props} ) {
	console.log('props.inputState', inputstate);
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
        <h4>You will edit a post!</h4>
        <p>Are you sure?</p>
      </Modal.Body>
      <Modal.Footer>
		<Button className='btn btn-success' onClick={()=>{
			replacepost(inputstate);
			inputstateclear();
			texthandler('');
			seterr(0);
			editpost('');
			props.onHide();
			
		}}>Yes</Button>
        <Button className='btn btn-danger' onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default SuperModal;
//connect(null, {replacePost})(SuperModal);

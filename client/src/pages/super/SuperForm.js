import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
	setErr,
} from "./superAction";
import SuperModal from "./SuperModal";
import { dateParsed } from "../../config";

const SuperForm = (props) => {
	// eslint-disable-next-line
	const [text, setText] = useState("");
	const [edit, setEdit] = useState({});
	const [modalShow, setModalShow] = useState(false);
	const [modalState, setModalState] = useState(false);
	const [inputState, setInputState] = useState({
		id: Date.now(),
		thumbnail: "Negro",
		postUrl: "slug/" + Date.now(),
		postHeader: "",
		postBody: "",
		author: "Cem Subaşı",
		category: "",
		date: dateParsed,
		featured: false,
		comments: [],
	});
	const [editorState, setState] = useState(EditorState.createEmpty());
	const onEditorStateChange = (editorState) => setState(editorState);
	const clearEditorState = () => setState(EditorState.createEmpty());

	useEffect(() => setInputState({ ...inputState, postBody: text }), [text]);

	useEffect(
		() => setEdit(props.state.filter((e) => e.postUrl === props.editState)),
		[props.editState]
	);

	useEffect(() => {
		if (edit[0]) {
			const blocksFromHtml = htmlToDraft(edit[0].postBody);
			const { contentBlocks, entityMap } = blocksFromHtml;
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap
			);

			const editorStateByContent = EditorState.createWithContent(contentState);
			setState(editorStateByContent);

			setInputState({ ...inputState, ...edit[0] });
			setText(edit[0].postBody);
		}
	}, [edit]);

	const inputStateHandler = (e) =>
		setInputState({ ...inputState, [e.target.name]: e.target.value });

	const inputStateClear = () =>
		setInputState({
			id: Date.now(),
			thumbnail: "Negro",
			postUrl: "slug/" + Date.now(),
			postHeader: "",
			postBody: "",
			author: "Cem Subaşı",
			category: "",
			date: dateParsed,
			featured: false,
			comments: [],
		});

	const Submit = () => {
		//if there is one other with same url then edit that object
		if (props.state.some((user) => user.postUrl === inputState.postUrl)) {
			setModalShow(true);
		}
		//url doesnt be empty or take blank
		//i should implement real url algorithm
		else if (inputState.postUrl === "" || inputState.postUrl.includes(" ")) {
			props.setErr(1);
			//success
		} else {
			setText("");
			inputStateClear();
			props.editPost("");
			props.setErr(0);

			return props.addPost(inputState);
		}
	};

	useEffect(() => {
		if (modalState) {
			props.replacePost(inputState);
			inputStateClear();
			props.setErr(0);
			props.editPost("");
			setState(EditorState.createEmpty());
		}
	}, [modalState]);

	return (
		<div className="container">
			<SuperModal
				show={modalShow}
				setModalState={setModalState}
				onHide={() => setModalShow(false)}
			/>
			{(() => {
				switch (props.errState) {
					case 0:
						return (
							<div className="alert alert-success" role="alert">
								Post has been sent successfuly!
							</div>
						);
					case 1:
						return (
							<div className="alert alert-danger" role="alert">
								Post Url must be unique and cannot include blank or special
								charachters! — check it out!
							</div>
						);
					case 2:
						return (
							<div className="alert alert-success" role="alert">
								Post was deleted successfuly!
							</div>
						);
					default:
						return null;
				}
			})()}

			<div className="row m-2auto">
				<div className="col-6 p-2">
					<label className="form-label">Thumbnail</label>
					<select
						className="form-select m-auto"
						name="thumbnail"
						value={inputState.thumbnail}
						onChange={(e) => inputStateHandler(e)}
						aria-label="Default select example"
					>
						<option value="Negro">Negro</option>
						<option value="Punch">Punch</option>
					</select>
				</div>
				<div className="col-6 p-2">
					<label className="form-label">Post Header</label>
					<input
						type="text"
						className="form-control"
						name="postHeader"
						value={inputState.postHeader}
						onChange={inputStateHandler}
						id="exampleFormControlInput1"
						placeholder="Post Header"
					/>
				</div>
			</div>
			<div className="row m-2auto">
				<div className="col-6 p-2">
					<label className="form-label">Post Author</label>
					<input
						type="text"
						className="form-control"
						name="author"
						value={inputState.author}
						onChange={inputStateHandler}
						id="exampleFormControlInput1"
						placeholder="Author"
					/>
				</div>
				<div className="col-6 p-2">
					<label className="form-label">Post Category</label>
					<input
						type="text"
						className="form-control"
						name="category"
						value={inputState.category}
						onChange={inputStateHandler}
						id="exampleFormControlInput1"
						placeholder="Category"
					/>
				</div>
			</div>

			<div className="editor mb-3 m-2auto">
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={onEditorStateChange}
					name="postBody"
					onChange={() => {
						setText(draftToHtml(convertToRaw(editorState.getCurrentContent())));
					}}
				/>
			</div>
			<div className="my-3">
				<button className="btn btn-outline-dark mb-3" onClick={Submit}>
					Add Post
				</button>
				<button
					className="btn btn-outline-danger mb-3 mx-2"
					onClick={() => {
						clearEditorState();
						inputStateClear();
						setText("");
						props.editPost("");
					}}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		editState: state.editState,
		errState: state.errState,
		err: state.errMessage,
	};
};

export default connect(mapStateToProps, {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
	setErr,
})(SuperForm);

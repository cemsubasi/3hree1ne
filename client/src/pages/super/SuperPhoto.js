import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import { addPhoto } from "./superAction";
import { dateParsed } from "../../config";

const SuperPhoto = (props) => {
	const [images, setImages] = useState([]);
	const maxNumber = 1;
	const onChange = (imageList, addUpdateIndex) => {
		setImages(imageList);
	};

	const [inputState, setInputState] = useState({
		data_url: "",
		file: {},
		date: "",
		title: "",
		category: "Ben",
	});
	const inputStateHandler = (e) => {
		setInputState({ ...inputState, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		setInputState({
			...images[0],
			date: dateParsed,
			title: inputState.title,
			category: inputState.category,
		});
	}, [images]);

	const setClearInputs = () =>
		setInputState({
			data_url: "",
			file: {},
			date: "",
			title: "",
			category: "Ben",
		});

	return (
		<div className="App">
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({ imageList, onImageUpload, onImageRemove, dragProps }) => (
					// write your building UI
					<div className="upload__image-wrapper">
						{imageList.map((image, index) => (
							<div key={index} className="image-item">
								<div className="card col-4 shadow-sm m-auto">
									<img
										src={image.data_url}
										className="bd-placeholder-img m-auto"
										style={{ maxWidth: "395px" }}
										height="300"
										alt=""
									/>

									<div className="card-body">
										<p className="card-text">{inputState.title}</p>
										<div>
											<small className="text-muted">{inputState.date}</small>
										</div>
									</div>
								</div>
							</div>
						))}
						&nbsp;
						<div className="row" style={{ maxWidth: "650px", margin: "auto" }}>
							<div className="col-9 py-3">
								<input
									type="text"
									className="form-control m-auto"
									name="title"
									value={inputState.title}
									onChange={inputStateHandler}
									id="exampleFormControlInput1"
									placeholder="Description"
								/>
							</div>
							<div className="col-3 py-3">
								<select
									className="form-select m-auto"
									name="category"
									value={inputState.category}
									onChange={inputStateHandler}
									aria-label="Default select example"
								>
									<option value="Ben">Ben</option>
									<option value="Onlar">Onlar</option>
								</select>
							</div>

							<div
								className="input-group mb-3"
								style={{ maxWidth: "650px", margin: "auto" }}
							>
								<button
									className="btn btn-outline-secondary"
									onClick={() => {
										props.addPhoto(inputState);
										setClearInputs();
										onImageRemove();
									}}
									type="button"
									id="inputGroupFileAddon03"
								>
									Save
								</button>

								<input
									{...dragProps}
									onClick={() => {
										onImageRemove();
										onImageUpload();
									}}
									type="file"
									className="form-control "
									id="inputGroupFile03"
									aria-describedby="inputGroupFileAddon03"
									aria-label="Upload"
								/>

								<button
									className="btn btn-outline-secondary"
									onClick={onImageRemove}
									type="button"
									id="inputGroupFileAddon04"
								>
									Clear
								</button>
							</div>
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.photoState,
	};
};

export default connect(mapStateToProps, { addPhoto })(SuperPhoto);

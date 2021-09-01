import React from "react";
import pp from "../../images/pp.webp";
import { aboutText } from "../../config";

function AboutBody(props) {
	return (
		<div className="container">
			<div className="bg-light pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
				<div className="my-3 py-3 text-dark ">
					<img
						className="mb-4 rounded-circle"
						id="profilePic"
						src={pp}
						alt=""
						width="220"
						height="220"
						style={{ border: "2px solid white" }}
					/>
					<h2 className="display-5">About</h2>
					<p className="lead">Cem Subaşı</p>
				</div>
				<div
					className="bg-dark shadow-sm mx-auto"
					style={{
						width: "80%",
						height: "auto",
						borderRadius: "21px 21px 0 0",
					}}
				>
					<h5 className="p-5 m-0auto">{aboutText}</h5>
				</div>
			</div>
		</div>
	);
}

export default AboutBody;

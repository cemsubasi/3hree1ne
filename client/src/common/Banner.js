import { bannerHead, bannerBody1, bannerBody2, bannerSpan } from "../config";
// import image from '../images/doggg.jpg';
const Banner = () => {
	// style={{backgroundImage: `url(${image})`}}>
	return (
		<div className="container">
			<div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">{bannerHead}</h1>
					<p className="lead my-3 ">
						{bannerBody1}{" "}
						<span style={{ textDecoration: "line-through" }}>{bannerSpan}</span>{" "}
						{bannerBody2}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;

import SuperBanner from "./SuperBanner";
import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
import SuperPhoto from "./SuperPhoto";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import HomeModal from "../home/HomeModal";
import { connect } from "react-redux";

function SuperPageContainer(props) {
	return (
		<div className="container">
			<div className="superuser">
				<Header />
				<HomeModal />
				<SuperBanner />
				{props.superInputState === "post" ? (
					<>
						<SuperList />
						<SuperForm />
					</>
				) : (
					<SuperPhoto />
				)}
				<Footer />
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		superInputState: state.superInputState,
	};
};
export default connect(mapStateToProps)(SuperPageContainer);

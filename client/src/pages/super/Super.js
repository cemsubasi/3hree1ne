import { connect } from "react-redux";
import SuperBanner from "./SuperBanner";
import SuperForm from "./SuperForm";
import SuperList from "./SuperList";
import SuperPhoto from "./SuperPhoto";
import HomeModal from "../home/HomeModal";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

function SuperPageContainer(props) {
	return (
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
	);
}
const mapStateToProps = (state) => {
	return {
		superInputState: state.superInputState,
	};
};
export default connect(mapStateToProps)(SuperPageContainer);

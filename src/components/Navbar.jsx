import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	const pathMatchRoutes = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<footer className="navbar">
			<nav className="navbarNav">
				<ul className="navbarListItems">
					<li
						className="navbarListItem"
						onClick={() => navigate("/")}
					>
						<ExploreIcon
							width="36px"
							height="36px"
							fill={pathMatchRoutes("/") ? "#2c2c2c" : "#8f8f8f"}
						/>
						<p
							className={
								pathMatchRoutes("/")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Explore
						</p>
					</li>
					<li
						className="navbarListItem"
						onClick={() => navigate("/offers")}
					>
						<OfferIcon
							width="36px"
							height="36px"
							fill={
								pathMatchRoutes("/offers")
									? "#2c2c2c"
									: "#8f8f8f"
							}
						/>
						<p
							className={
								pathMatchRoutes("/offers")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Offers
						</p>
					</li>
					<li
						className="navbarListItem"
						onClick={() => navigate("/profile")}
					>
						<PersonOutlineIcon
							width="36px"
							height="36px"
							fill={
								pathMatchRoutes("/profile")
									? "#2c2c2c"
									: "#8f8f8f"
							}
						/>
						<p
							className={
								pathMatchRoutes("/profile")
									? "navbarListItemNameActive"
									: "navbarListItemName"
							}
						>
							Profile
						</p>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Navbar;

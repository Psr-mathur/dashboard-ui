import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { UserButton } from "@clerk/clerk-react";
const Header = () => {
	return (
		<div className="headerContainer">
			<div>
				<h1>Dashboard</h1>
			</div>
			<div>
				<div>
					<input type="text" placeholder="Search..." />
					<FontAwesomeIcon icon={faSearch} />
				</div>
				<FontAwesomeIcon icon={faBell} size="2x" />
				<div>
					<UserButton />
				</div>
			</div>
		</div>
	);
};

export default Header;

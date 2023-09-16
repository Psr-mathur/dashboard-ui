import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { UserButton } from "@clerk/clerk-react";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";
import Sidebar from "./Sidebar";
const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<div className="headerContainer">
			<div>
				<span onClick={() => setOpenMenu(true)}>
					<MenuIcon fontSize="large" />
				</span>
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
			{openMenu && (
				<div className="mobileSidebar">
					<Sidebar setOpenMenu={setOpenMenu} />
				</div>
			)}
		</div>
	);
};

export default Header;

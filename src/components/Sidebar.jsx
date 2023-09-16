import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faTags, faGear, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ setOpenMenu }) => {
	return (
		<div className="sidebarContainer">
			<div className="sidebar">
				<div>
					<h1>Board.</h1>
					<span onClick={() => setOpenMenu(false)}>
						<CloseIcon fontSize="large" />
					</span>
				</div>
				<div>
					<div>
						<FontAwesomeIcon icon={faSnowflake} />
						<span>Dashboard</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faTags} />
						<span>Transactions</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faCalendarDays} />
						<span>Schedules</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faCircleUser} />
						<span>Users</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faGear} />
						<span>Settings</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

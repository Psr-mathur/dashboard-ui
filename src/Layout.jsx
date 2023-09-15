import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
const Layout = () => {
	return (
		<div className="LayoutContainer">
			<div className="LayoutContentContainer">
				<div className="leftCon">
					<Sidebar />
				</div>
				<div className="rightCon">
					<div className="rightContentCon">
						<Header />
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;

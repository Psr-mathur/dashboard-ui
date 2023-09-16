import { UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import "./home.scss";
import Total from "../components/Total";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { BarChart } from "../components/BarChart";
import { UserData, GuestData } from "../components/data";
import { DoughnutChart } from "../components/DoughChart";
import Modal from "../components/modal";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [user, setUser] = useState({});

	const [chartData, setChartData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "User ",
				data: UserData.map((data) => data.userGain),
				backgroundColor: ["#98D89E"],
				barPercentage: 0.4,
				categoryPercentage: 0.7,
			},
			{
				label: "Guest",
				data: GuestData.map((data) => data.userGain),
				backgroundColor: ["#EE8484"],
				barPercentage: 0.4,
				categoryPercentage: 0.7,
			},
		],
	});
	// console.log(user);
	return (
		<div className="homeContainer">
			<div className="homeTotalCon">
				<Total
					title="Total Revenue"
					val="$2,129,430"
					grow="+2.5%"
					bgColor="#7FCD93"
				>
					{/* <FontAwesomeIcon icon={faMoneyCheckDollar} /> */}
					<img src="/revenues.png" alt="" />
				</Total>
				<Total
					title="Total Transactions"
					val="1520"
					grow="+1.7%"
					bgColor="#DEBF85"
				>
					{/* <FontAwesomeIcon icon={faTags} /> */}
					<img src="/trans.png" alt="" />
				</Total>
				<Total
					title="Total Likes"
					val="9,721"
					grow="+1.4%"
					bgColor="#ECA4A4"
				>
					{/* <FontAwesomeIcon icon={faThumbsUp} /> */}
					<img src="/like.png" alt="" />
				</Total>
				<Total
					title="Total Users"
					val="9,721"
					grow="+4.2%"
					bgColor="#A9B0E5"
				>
					{/* <FontAwesomeIcon icon={faUsers} /> */}
					<img src="/users.png" alt="" />
				</Total>
			</div>
			<div className="barChartContainer">
				<div>
					<div></div>
					<div></div>
				</div>
				<BarChart chartData={chartData} />
			</div>
			<div className="doandprofileCon">
				<div className="donutChartContainer">
					<DoughnutChart />
				</div>
				<div className="profileCreateContainer">
					{user.name ? (
						<div className="toshow">
							<p>{user.name}</p>
							<div>
								<div>
									<WhatsAppIcon color="success" />
									<span>{user.phone}</span>
								</div>
								{user.instalink && (
									<div>
										<InstagramIcon color="warning" />
										<span>{user.instalink}</span>
									</div>
								)}
								<div>
									<EmailOutlinedIcon color="primary" />
									<span>{user.email}</span>
								</div>
								{user.ytlink && (
									<div>
										<YouTubeIcon color="error" />
										<span>{user.ytlink}</span>
									</div>
								)}
							</div>
						</div>
					) : (
						<div className="toCreate">
							<div onClick={() => setShowModal(true)}>
								<span>+</span>
							</div>
						</div>
					)}
				</div>
			</div>
			{showModal && (
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					setUser={setUser}
				/>
			)}
			<div className="space"></div>
		</div>
	);
};

export default Home;

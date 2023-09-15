// import { faMoneyBillTrendUp } from "@fortawesome/free-regular-svg-icons";

const Total = ({ title, children, val, grow, bgColor }) => {
	return (
		<div className="totalCon">
			<div>
				<div className="logo-bg" style={{ backgroundColor: bgColor }}>
					{children}
				</div>
			</div>
			<span>{title}</span>
			<div>
				<p>{val}</p>
				<span>{grow}</span>
			</div>
		</div>
	);
};

export default Total;

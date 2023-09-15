// components/BarChart.js
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
	const [barWidth, setBarwidth] = useState(null);
	useEffect(() => {
		if (window.innerWidth > 600) {
			setBarwidth(50);
		} else {
			setBarwidth(20);
		}
	}, [window.innerWidth]);
	return (
		<div style={{ width: "100%", height: "325px" }}>
			<Bar
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Followers Gained between 2016-2020",
						},
						legend: {
							display: true,
						},
					},
					barThickness: barWidth,
					responsive: true,
					maintainAspectRatio: false,
					layout: {
						padding: {
							left: 20,
							right: 20,
							top: 20,
							bottom: 20,
						},
					},
					grid: {
						display: true,
						color: "rgba(0, 0, 0, 0.1)", // Change the color of the gridlines
						borderColor: "rgba(0, 0, 0, 0.1)", // Change the border color of the gridlines
					},
				}}
			/>
		</div>
	);
};

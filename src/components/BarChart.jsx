// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
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
					barThickness: 50,
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

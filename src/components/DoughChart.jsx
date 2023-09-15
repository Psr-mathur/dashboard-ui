import { Doughnut } from "react-chartjs-2";

export const data = {
	labels: ["Red", "Blue", "Yellow", "Green"],
	datasets: [
		{
			label: "Sales of Jeans",
			data: [12, 19, 3, 5],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
			],
			borderWidth: 1,
		},
	],
};

const options = {
	responsive: true, // Make the chart responsive
	cutout: "80%", // Adjust the size of the hole in the center (percentage or pixel value)
	plugins: {
		legend: {
			display: true,
			position: "right", // Position of the legend (top, bottom, left, right)
		},
		title: {
			display: true,
			text: "Top Products", // Title text
			font: {
				size: 16, // Title font size
			},
		},
	},
	maintainAspectRatio: false,
};

export const DoughnutChart = () => {
	return (
		<div style={{ width: "300px", height: "225px" }}>
			<Doughnut data={data} options={options} />
		</div>
	);
};

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Protectedelement from "./components/protect";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Login from "./pages/login";
import Register from "./pages/register";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./Layout";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.css";
import Chart from "chart.js/auto";
import { CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

const App = () => {
	const CLERK_PUBLISHABLE_KEY =
		"pk_test_cHJvbXB0LWd1bGwtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA";
	const navigate = useNavigate();
	return (
		<ClerkProvider
			publishableKey={CLERK_PUBLISHABLE_KEY}
			navigate={(to) => navigate(to)}
		>
			<Routes>
				<Route
					path="/"
					element={
						<Protectedelement>
							<Layout />
						</Protectedelement>
					}
				>
					<Route path="/" element={<Home />} />
				</Route>
				{/* <Route
					path="/sign-in/*"
					element={
						<SignIn
							redirectUrl="/"
							routing="path"
							path="/sign-in"
						/>
					}
				/>
				<Route
					path="/sign-up/*"
					element={
						<SignUp
							redirectUrl="/"
							routing="path"
							path="/sign-up"
						/>
					}
				/> */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</ClerkProvider>
	);
};

export default App;

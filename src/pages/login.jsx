import { SignIn, useSignIn } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import "./sign.scss";
import Leftpart from "../components/authlogos";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Login = () => {
	const { isLoaded } = useSignIn();

	if (!isLoaded) {
		return <Loading />;
	}
	return (
		<div className="signpageContainer">
			<Leftpart />
			<div className="rightpartcontainer">
				<SignIn />
				<div className=" customSigntag">
					<p>Don't have an account? </p>
					<Link to="/register">Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;

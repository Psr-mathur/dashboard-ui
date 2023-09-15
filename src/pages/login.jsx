import { SignIn, useSignIn } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import "./sign.scss";
import Leftpart from "../components/authlogos";

const Login = () => {
	const { isLoaded } = useSignIn();

	if (!isLoaded) {
		return <h5>Loading...</h5>;
	}
	return (
		<div className="signpageContainer">
			<Leftpart />
			<div className="rightpartcontainer">
				<SignIn />
				<div className=" customSigntag">
					<p>Don't have an account? </p>
					<a href="/register">Sign Up</a>
				</div>
			</div>
		</div>
	);
};

export default Login;

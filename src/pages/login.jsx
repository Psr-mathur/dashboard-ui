import { SignIn, useSignIn } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import "./sign.scss";
import Leftpart from "../components/authlogos";
import Loading from "../components/Loading";

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
					<a href="/register">Sign Up</a>
				</div>
			</div>
		</div>
	);
};

export default Login;

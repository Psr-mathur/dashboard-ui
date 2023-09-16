import { SignUp, useSignUp } from "@clerk/clerk-react";
import React from "react";
import "./sign.scss";
import Leftpart from "../components/authlogos";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Register = () => {
	const { isLoaded } = useSignUp();

	if (!isLoaded) {
		return <Loading />;
	}
	return (
		<div className="signpageContainer">
			<Leftpart />
			<div className="rightpartcontainer">
				<SignUp />
				<div className=" customSigntag">
					<p>Already have an account? </p>
					<Link to="/login">Sign In</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;

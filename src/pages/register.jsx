import { SignUp, useSignUp } from "@clerk/clerk-react";
import React from "react";
import "./sign.scss";
import Leftpart from "../components/authlogos";

const Register = () => {
	const { isLoaded } = useSignUp();

	if (!isLoaded) {
		return <h5>Loading...</h5>;
	}
	return (
		<div className="signpageContainer">
			<Leftpart />
			<div className="formcontainer">
				<SignUp />
				<div className=" customSigntag">
					<p>Already have an account? </p>
					<a href="/login">Sign In</a>
				</div>
			</div>
		</div>
	);
};

export default Register;

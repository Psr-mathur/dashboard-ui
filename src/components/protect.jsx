import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Login from "../pages/login";
import { Navigate } from "react-router-dom";

const Protectedelement = ({ children }) => {
	const { isSignedIn } = useUser();
	if (!isSignedIn) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default Protectedelement;

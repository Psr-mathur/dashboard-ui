import { useEffect, useState } from "react";
import "./modal.scss";

const Modal = ({ showModal, setShowModal, setUser }) => {
	const [page, setPage] = useState(1);
	const [tempuser, setTempUser] = useState({
		name: "",
		email: "",
		phone: "",
		instalink: "",
		ytlink: "",
	});
	useEffect(() => {
		setTempUser({
			name: "",
			email: "",
			phone: "",
			instalink: "",
			ytlink: "",
		});
	}, [showModal]);

	const ChangePage = () => {
		setPage((prev) => (prev == 1 ? 2 : 1));
	};
	const handleChange = (e) => {
		e.preventDefault();
		setTempUser((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ ...tempuser });
		setShowModal(false);
	};
	return (
		<div className="modalCon">
			<div className="modalContentCon">
				<div>
					<span>Add New Profile</span>
					<span onClick={() => setShowModal(false)} className="x">
						X
					</span>
				</div>
				<div>
					<span showBorder={(page == 1).toString()}>Basic</span>
					<span showBorder={(page == 2).toString()}>Social</span>
				</div>
				{page == 1 ? (
					<>
						<div className="formCon1">
							<label htmlFor="name">Enter Name*</label>
							<input
								type="text"
								placeholder="Eg. Jhon Doe"
								name="name"
								onChange={handleChange}
								value={tempuser.name}
								required
							/>
							<label htmlFor="email">Enter Email*</label>
							<input
								type="email"
								name="email"
								placeholder="Eg. Jhondoe@email.com"
								onChange={handleChange}
								value={tempuser.email}
								required
							/>
							<label htmlFor="phone">Enter Phone*</label>
							<input
								type="text"
								name="phone"
								placeholder="Eg. 7512345678"
								onChange={handleChange}
								value={tempuser.phone}
								required
							/>
							<button
								style={{
									marginTop: "10px",
									marginLeft: "auto",
								}}
								onClick={ChangePage}
							>
								Next
							</button>
						</div>
					</>
				) : (
					<>
						<div className="formCon2">
							<label htmlFor="instalink">Instagram Link</label>
							<input
								type="text"
								name="instalink"
								placeholder="Eg. ..instagram.com/username"
								onChange={handleChange}
								value={tempuser.instalink}
							/>
							<label htmlFor="ytlink">Youtube Link</label>
							<input
								type="text"
								name="ytlink"
								placeholder="Eg. ..youtebe/username"
								onChange={handleChange}
								value={tempuser.ytlink}
							/>
							<div style={{ marginTop: "10px" }}>
								<button onClick={handleSubmit}>Submit</button>
								<button
									className="backButton"
									onClick={ChangePage}
								>
									Back
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Modal;

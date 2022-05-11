import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
	const [password, setPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		name: "",
	});

	const { email, name } = formData;
	const navigate = useNavigate();

	return (
		<>
			<div className="pageContainer"></div>
		</>
	);
}

export default SignIn;

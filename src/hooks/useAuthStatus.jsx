import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";

export const useAuthStatus = () => {
	const auth = getAuth();
	const [loggedIn, setLoggedIn] = useState(false);
	const [checkingStatus, setCheckingStatus] = useState(true);
	const isMounted = useRef(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setLoggedIn(true);
			setCheckingStatus(false);
		});
		return () => {
			isMounted.current = false;
		};
	}, [isMounted]);

	return { loggedIn, checkingStatus };
};

import { Link } from "react-router-dom";

import { ClockQuestion } from "./../../components/ClockQuestion/ClockQuestion";

export const Practice = () => {
	const urlParams = new URLSearchParams(window.location.search);
	let interval = parseInt(urlParams?.get("interval") || "1");

	if (![1, 5, 10, 15].includes(interval)) {
		interval = 1;
	}

	return (
		<>
			<nav>
				<Link to="/">
					<svg height="24" viewBox="0 0 24 24" width="24">
						<path
							fill="var(--highlight)"
							d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
						/>
					</svg>
				</Link>
			</nav>
			<main>
				<ClockQuestion interval={interval} />
			</main>
		</>
	);
};

export default Practice;

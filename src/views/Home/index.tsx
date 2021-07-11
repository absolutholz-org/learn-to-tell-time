import styled from "styled-components";

import Button from "../../components/Button";

const StyledFormFooter = styled.div`
	margin-top: 2rem;
`;

const StyledFormLabel = styled.div`
	margin: 2rem 0 0.5rem;
`;

const StyledFormSelect = styled.select`
	border: 2px solid;
	border-radius: 4px;
	font: inherit;
	padding: 0.5rem 1.5rem 0.6rem;
`;

export const Home = () => {
	return (
		<main>
			<h1>Clock practice</h1>
			<p>A little excercise to help you learn how to read a clock.</p>
			<form action="/practice">
				<label htmlFor="interval">
					<StyledFormLabel>
						Choose your difficulty level
					</StyledFormLabel>
					<StyledFormSelect
						id="interval"
						name="interval"
						defaultValue="5"
					>
						<option value="15">15 minute intervals</option>
						<option value="10">10 minute intervals</option>
						<option value="5">5 minute intervals</option>
						<option value="1">1 minute intervals</option>
					</StyledFormSelect>
				</label>
				<StyledFormFooter>
					<Button type="submit">Start</Button>
				</StyledFormFooter>
			</form>
		</main>
	);
};

export default Home;

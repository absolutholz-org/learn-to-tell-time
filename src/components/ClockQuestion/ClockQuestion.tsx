import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { Clock } from "../Clock/Clock";
import Button from "../Button";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const StyledClockQuestionContainer = styled.form`
	text-align: center;
`;

const StyledClockQuestionContainerClock = styled.div`
	margin: 0 auto;
	width: min(400px, 100%);
`;

const StyledClockQuestionContainerAnswersLegend = styled.legend`
	font-weight: 500;
	margin: 1rem 0;
`;

const StyledClockQuestionContainerAnswers = styled.fieldset`
	border: 0;
	margin: 1rem 0 0;
	padding: 0;
`;

const StyledClockQuestionFooter = styled.div`
	margin-top: 1rem;
`;

const StyledClockAnswerWrapper = styled.label`
	display: inline-flex;
`;

const StyledClockAnswerLabel = styled.span`
	border: 2px solid;
	border-radius: 4px;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	font-size: 1.5rem;
	font-weight: 500;
	margin: 0.5rem;
	padding: 0.5rem 1.5rem 0.6rem;
	transition-delay: 0s;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: color, box-shadow, border;
`;

const StyledClockAnswerInput = styled.input`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;

	&:checked + * {
		color: var(--highlight);
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
			0px 4px 5px 0px rgba(0, 0, 0, 0.14),
			0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	}
`;

interface Time {
	hour: number;
	minute: number;
}

export function shuffle<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function roundDownToNearest(
	numberToRound: number,
	interval: number
): number {
	return Math.ceil(numberToRound / interval) * interval;
}

interface IClockQuestionProps {
	interval: number;
}

export const ClockQuestion = ({ interval }: IClockQuestionProps) => {
	const [hourAndMinute, setHourAndMinute] = useState<Time>({
		hour: 0,
		minute: 0,
	});
	const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState("");

	const [answers, setAnswers] = useState<Array<Time>>([]);

	const calculateRandomHourAndMinute = useCallback((): Time => {
		const hour = Math.floor(Math.random() * 24);
		const minute = roundDownToNearest(
			Math.floor(Math.random() * 59),
			interval
		);

		return {
			hour,
			minute,
		};
	}, [interval]);

	const onInput = (event: InputEvent): void => {
		setSelectedAnswer(event.target.value);
	};

	useEffect(() => {
		setCorrectAnswerSelected(
			selectedAnswer === `${hourAndMinute.hour}:${hourAndMinute.minute}`
		);
	}, [hourAndMinute, selectedAnswer]);

	useEffect(() => {
		setAnswers(
			shuffle([
				hourAndMinute,
				calculateRandomHourAndMinute(),
				calculateRandomHourAndMinute(),
			])
		);
	}, [hourAndMinute, calculateRandomHourAndMinute]);

	useEffect(() => {
		setHourAndMinute(calculateRandomHourAndMinute());
	}, [calculateRandomHourAndMinute]);

	return (
		<StyledClockQuestionContainer method="GET">
			<input type="hidden" name="interval" value={interval} />
			<StyledClockQuestionContainerClock>
				<Clock
					hours={hourAndMinute.hour}
					minutes={hourAndMinute.minute}
				/>
			</StyledClockQuestionContainerClock>
			<StyledClockQuestionContainerAnswers>
				<StyledClockQuestionContainerAnswersLegend>
					What time is it?
				</StyledClockQuestionContainerAnswersLegend>
				{answers.map((answer) => (
					<StyledClockAnswerWrapper
						htmlFor={`answer-${answer.hour}:${answer.minute}`}
						key={`answer-${answer.hour}-${answer.minute}`}
					>
						<StyledClockAnswerInput
							id={`answer-${answer.hour}:${answer.minute}`}
							name="answer"
							onChange={onInput}
							type="radio"
							value={`${answer.hour}:${answer.minute}`}
						/>
						<StyledClockAnswerLabel>
							{answer.hour}:
							{answer.minute < 10
								? `0${answer.minute}`
								: answer.minute}
						</StyledClockAnswerLabel>
					</StyledClockAnswerWrapper>
				))}
			</StyledClockQuestionContainerAnswers>
			<StyledClockQuestionFooter>
				<Button disabled={!correctAnswerSelected} type="submit">
					Next
				</Button>
			</StyledClockQuestionFooter>
		</StyledClockQuestionContainer>
	);
};

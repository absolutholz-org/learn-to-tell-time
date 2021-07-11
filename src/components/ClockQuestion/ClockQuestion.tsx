import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Clock } from '../Clock/Clock';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const StyledClockQuestionContainer = styled.form`
  text-align: center;
`;

const StyledClockQuestionContainerClock = styled.div`
  margin: 0 auto;
  width: min(500px, 100%);
`;

const StyledClockQuestionContainerAnswers = styled.fieldset``;

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
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [answers, setAnswers] = useState<Array<Time>>([]);

  const calculateRandomHourAndMinute = useCallback((): Time => {
    const hour = Math.floor(Math.random() * 24);
    const minute = roundDownToNearest(Math.floor(Math.random() * 59), interval);

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
        <Clock hours={hourAndMinute.hour} minutes={hourAndMinute.minute} />
      </StyledClockQuestionContainerClock>
      <StyledClockQuestionContainerAnswers>
        <legend>What time is it?</legend>
        {answers.map((answer) => (
          <label key={`answer-${answer.hour}-${answer.minute}`}>
            <input
              name="answer"
              onChange={onInput}
              type="radio"
              value={`${answer.hour}:${answer.minute}`}
            />
            {answer.hour}:
            {answer.minute < 10 ? `0${answer.minute}` : answer.minute}
          </label>
        ))}
      </StyledClockQuestionContainerAnswers>
      <div>
        <button disabled={!correctAnswerSelected} type="submit">
          Next
        </button>
      </div>
    </StyledClockQuestionContainer>
  );
};

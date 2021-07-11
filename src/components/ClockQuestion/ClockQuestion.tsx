import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Clock } from '../Clock/Clock';

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

export const ClockQuestion = () => {
  const [hourAndMinute, setHourAndMinute] = useState<Time>({
    hour: 0,
    minute: 0,
  });

  const [answers, setAnswers] = useState<Array<Time>>([]);

  function calculateRandomHourAndMinute(): Time {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 59);

    return {
      hour,
      minute,
    };
  }

  useEffect(() => {
    setAnswers(
      shuffle([
        hourAndMinute,
        calculateRandomHourAndMinute(),
        calculateRandomHourAndMinute(),
      ])
    );
  }, [hourAndMinute]);

  useEffect(() => {
    setHourAndMinute(calculateRandomHourAndMinute());
  }, []);

  return (
    <StyledClockQuestionContainer>
      <StyledClockQuestionContainerClock>
        <Clock hours={hourAndMinute.hour} minutes={hourAndMinute.minute} />
      </StyledClockQuestionContainerClock>
      <StyledClockQuestionContainerAnswers>
        <legend>What time is it?</legend>
        {answers.map((answer) => (
          <label key={`answer-${answer.hour}-${answer.minute}`}>
            <input name="answer" type="radio" />
            {answer.hour}:
            {answer.minute < 10 ? `0${answer.minute}` : answer.minute}
          </label>
        ))}
      </StyledClockQuestionContainerAnswers>
      <div>
        <button type="submit">Next</button>
      </div>
    </StyledClockQuestionContainer>
  );
};
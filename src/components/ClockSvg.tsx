import styled, { css } from 'styled-components';

const StyleClockText = styled.text`
  fill: #000;
  font-size: 20px;
  font-weight: bold;
`;

const StyledClockHand = styled.path`
  fill: var(--highlight, hsl(0deg 100% 50%));
  stroke: #000;
  stroke-width: 0.625;
  transform-origin: calc(50% + 1px) calc(50% + 1px);
`;

interface IStyledClockHandHourProps {
  hours: number;
  minutes: number;
}

interface IStyledClockHandMinuteProps {
  minutes: number;
}

const StyledClockHandMinute = styled(
  StyledClockHand
)<IStyledClockHandMinuteProps>`
  ${({ minutes }) =>
    minutes &&
    css`
      transform: rotate(${(minutes / 60) * 360}deg);
    `}
`;

const StyledClockHandHour = styled(StyledClockHand)<IStyledClockHandHourProps>`
  ${({ hours, minutes }) =>
    hours &&
    minutes &&
    css`
      transform: rotate(${(hours / 12) * 360 + (minutes / 60) * 30}deg);
    `}
`;

interface IClockSvgProps {
  hours?: number;
  minutes?: number;
}

export const ClockSvg = ({ hours = 0, minutes = 0 }: IClockSvgProps) => {
  return (
    <svg viewBox="0 0 319 319">
      <circle cx="50%" cy="50%" r="49%" fill="none" stroke="currentColor" />
      <circle
        cx="50%"
        cy="50%"
        r="calc(49% - 10px)"
        fill="none"
        stroke="currentColor"
      />
      <path
        id="tick-marks"
        stroke="currentColor"
        strokeWidth=".9375"
        fill="none"
        d="M160.487 288.044v8.859M160.487 24.063v8.862M24.065 160.487h8.859M288.038 160.487h8.862M42.343 228.692l7.653-4.418M270.975 96.7l7.65-4.425M224.275 50l4.412-7.65M92.274 278.625l4.419-7.654M96.692 50l-4.418-7.65M228.688 278.625l-4.413-7.655M49.995 96.7l-7.655-4.425M278.625 228.691l-7.65-4.417"
      />
      <StyleClockText x="215" y="67">
        1
      </StyleClockText>
      <StyleClockText x="260" y="113">
        2
      </StyleClockText>
      <StyleClockText x="275" y="167">
        3
      </StyleClockText>
      <StyleClockText x="260" y="222">
        4
      </StyleClockText>
      <StyleClockText x="215" y="268">
        5
      </StyleClockText>
      <StyleClockText x="155" y="285">
        6
      </StyleClockText>
      <StyleClockText x="94" y="268">
        7
      </StyleClockText>
      <StyleClockText x="53" y="226">
        8
      </StyleClockText>
      <StyleClockText x="36" y="167">
        9
      </StyleClockText>
      <StyleClockText x="49" y="111">
        10
      </StyleClockText>
      <StyleClockText x="93" y="65">
        11
      </StyleClockText>
      <StyleClockText x="148" y="50">
        12
      </StyleClockText>
      <StyledClockHandHour
        hours={hours}
        minutes={minutes}
        id="hand-hour"
        d="M153.25 160.45c0 3.85 3.175 6.975 7.088 6.975s7.087-3.125 7.087-6.988c0-2.025-.887-3.85-2.275-5.125.112-.425.188-.875.188-1.35l-.038-69.875c0-2.887-2.25-5.237-5-5.237s-5 2.362-5 5.237l.037 69.888c0 .462.076.912.188 1.35a6.892 6.892 0 00-2.275 5.125"
      />
      <StyledClockHandMinute
        minutes={minutes}
        id="hand-minute"
        d="M163.325 158.387c.175-.437.288-.925.288-1.45V57.725c0-1.938-1.413-3.538-3.126-3.538-1.725 0-3.125 1.6-3.125 3.538v99.213c0 .525.1 1.012.275 1.45a3.504 3.504 0 00-.7 2.1 3.545 3.545 0 007.088 0c0-.788-.263-1.513-.7-2.1"
      />
    </svg>
  );
};

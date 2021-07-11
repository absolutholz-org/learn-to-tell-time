import React from 'react';
import styled from 'styled-components';

// import { Clock } from './components/Clock';
import { ClockSvg } from './components/ClockSvg';

const StyledClock = styled.div`
  /* margin: 4rem; */
  /* width: 250px; */
`;

function App() {
  return (
    <>
      <StyledClock>
        {/* <Clock /> */}
        <ClockSvg hours={10} minutes={10} />
      </StyledClock>
    </>
  );
}

export default App;

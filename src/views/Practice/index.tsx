// import styled from 'styled-components';

import { ClockQuestion } from './../../components/ClockQuestion/ClockQuestion';

export const Practice = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let interval = parseInt(urlParams?.get('interval') || '1');

  if (![1, 5, 10, 15].includes(interval)) {
    interval = 1;
  }

  return (
    <main>
      <ClockQuestion interval={interval} />
    </main>
  );
};

export default Practice;

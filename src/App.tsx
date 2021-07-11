import { ClockQuestion } from './components/ClockQuestion/ClockQuestion';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let interval = parseInt(urlParams?.get('interval') || '1');

  if (![1, 5, 10, 15].includes(interval)) {
    interval = 1;
  }

  return (
    <>
      <ClockQuestion interval={interval} />
    </>
  );
}

export default App;

// import styled from 'styled-components';

export const Home = () => {
  return (
    <main>
      <h1>Hi!</h1>
      <form action="/practice">
        <select name="interval" defaultValue="5">
          <option>1</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
        <button type="submit">Start</button>
      </form>
    </main>
  );
};

export default Home;

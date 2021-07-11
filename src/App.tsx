import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import Practice from './views/Practice';

function App() {
  return (
    <Router>
      <Route path="/" render={Home} exact />
      <Route path="/practice" component={Practice} />
    </Router>
  );
}

export default App;

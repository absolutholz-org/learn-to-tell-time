import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import Practice from './views/Practice';

import { PageContainer } from './components/Layout';

function App() {
  return (
    <Router>
      <PageContainer>
        <Route path="/" render={Home} exact />
        <Route path="/practice" component={Practice} />
      </PageContainer>
    </Router>
  );
}

export default App;

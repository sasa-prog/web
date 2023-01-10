import './App.css';

import Home from './Home';
import Nav from './Navigation';
import BGM from './bgm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>} />
          <Route path="/bgm" element={<><Nav /><BGM /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

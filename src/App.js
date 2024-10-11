import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/NyxVoid/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
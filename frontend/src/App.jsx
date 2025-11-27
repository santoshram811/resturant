import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import Success from './pages/Success/Success';

import NotFound from './pages/NotFound/NotFount';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

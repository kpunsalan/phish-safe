import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import EmailPhishing from './pages/EmailPhishing';
import Smishing from './pages/Smishing';
import Vishing from './pages/Vishing';
import BeenTargeted from './pages/BeenTargeted';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-phishing" element={<EmailPhishing />} />
        <Route path="/smishing" element={<Smishing />} />
        <Route path="/vishing" element={<Vishing />} />
        <Route path="/been-targeted" element={<BeenTargeted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

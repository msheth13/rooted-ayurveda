import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doshas from './pages/Doshas';
import Recipes from './pages/Recipes';
import SelfCare from './pages/SelfCare';
import Dashboard from './pages/Dashboard';
import WhyRooted from './pages/WhyRooted';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/doshas" element={<Doshas />} />
        <Route path="/whyrooted" element={<WhyRooted />} />
        <Route path="/dashboard" element={<Dashboard name="Mehreen" />} />
      </Routes>
    </Router>
  );
}

export default App;

//App.jsx handles routing using <Routes>, linking each path to the correct page component.

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import Home from './pages/Home'

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

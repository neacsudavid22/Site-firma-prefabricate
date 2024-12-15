import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Item from './pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/item/:letter" element={<Item />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

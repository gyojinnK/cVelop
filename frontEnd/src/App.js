import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBoard from './component/MainBoard';
import StartC from './component/StartC';
import FrontToBack from './FrontToBack';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<StartC />} />
            <Route path="/MainBoard" element={<MainBoard />} />
            <Route path="/FrontToBack" element={<FrontToBack />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

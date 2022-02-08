import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartC from './component/StartC';
import FrontToBack from './FrontToBack';
import Section from './component/Section';
import Header from './component/Header';
import NavBtn from './component/NavBtn';
import ChatList from './component/ChatList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartC />} />
        </Routes>
        <div className="App">
          <Header />
          {/* <Routes>
            <Route path='/Header/Nav' element={<Header />} />
          </Routes> */}
          <Routes>
            <Route path="/Header/Nav" element={<NavBtn />} />
            <Route path="/Header/ChatList" element={<ChatList />} />
            <Route path="/Header/Section" element={<Section />} />
            {/* <Route path="/FrontToBack" element={<FrontToBack />} /> */}
          </Routes>
          <FrontToBack />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

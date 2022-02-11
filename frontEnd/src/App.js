import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartC from './component/StartC';
import Section from './component/Section';
import Header from './component/Header';
import NavBtn from './component/NavBtn';
import ChatList from './component/ChatList';
import Entrance from './component/Entrance';
import Footer from './component/Footer';

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
          <Routes className="routesWrap">
            <Route path="/Nav" element={<NavBtn />} />
            <Route path="/Entrance" element={<Entrance />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/Section" element={<Section />} />
            {/* <Route path="/FrontToBack" element={<FrontToBack />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

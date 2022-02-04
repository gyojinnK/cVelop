import './App.css';
import './index.css';
import Header from './component/Header';
import { useEffect, useState } from "react";
import Section from './component/Section';
import StartC from './component/StartC';

/* ============Spring boot 연동============ */
function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("/test")
      .then(res => res.text())
      .then(m=>setMessage(m))
  }, []);
  /* ============Spring boot 연동============ */

  return (
    <div className="App">
      <StartC />
      <Header />
      <Section />
      <p>
        {message}
      </p>
    </div>
  );
}

export default App;

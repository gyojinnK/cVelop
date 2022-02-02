import './App.css';
import Header from './component/Header';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("/test")
      .then(res => res.text())
      .then(m=>setMessage(m))
  }, []);

  return (
    <div className="App">
      <Header />
      <p>
        {message}
      </p>
      {/* <FrontToBack /> */}
    </div>
  );
}

export default App;

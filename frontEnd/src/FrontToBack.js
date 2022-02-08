import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


export default function FrontToBack(){
    const [message, setMessage] = useState("")

    useEffect(()=>{
        fetch("/test")
          .then(res => res.text())
          .then(m=>setMessage(m))
      }, []);

    return(
        <>
            <p style={{
                fontSize: "1rem",
                /* position: "absolute",
                bottom: "20px" */
                textAlign: "center"
            }}>{message}</p>
            {/* <Link to="/MainBoard" style={{textDecoration : "none", fontSize : "50px"}}>Back!</Link> */}
        </>
    )
}
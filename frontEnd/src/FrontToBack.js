import { useEffect, useState } from "react";

export default function FrontToBack(){
    const [message, setMessage] = useState([]);

    useEffect(()=>{
        fetch("/hello").then((res)=>{
          return res.json();
        }).then((data) => {
          setMessage(data);
        })
    }, []);

    return(
        <>
            <ul>
                {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
            </ul>
        </>
    )
}
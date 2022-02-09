import { Link } from "react-router-dom";
import "./css/ChatList.css"

export default function ChatList(){
    function hoverEffect(){
        let ul = document.querySelector("ul");
        ul.style.display = "inline-block";
    }
    function outEffect(){
        let ul = document.querySelector("ul");
        ul.style.display = "none"
    }
    return(
        <>
            <div className="Area" onMouseOver={hoverEffect} onMouseOut={outEffect}>
                <ul>
                    <li className="li1">List1</li>
                    <li className="li2">List2</li>
                    <li className="li3">List3</li>
                    <li className="li4">List4</li>
                    <li className="li5">List5</li>
                    <Link to="/Nav" style={{
                        position:"absolute",
                        right: "50px",
                        bottom: "30px", 
                        textDecoration: "none",
                        color: "var(--color-darkPuple)",
                        backgroundColor: "aliceblue",
                        textAlign: "center",
                        borderRadius: "20px",
                        width: "60px",
                    }}>back!</Link>
                </ul>
            </div>
        </>
    )
}
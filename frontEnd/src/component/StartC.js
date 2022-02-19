import "./css/StartC.css"
import { Link } from "react-router-dom"
import SetNick from "./SetNick";
import { useState } from "react";

export default function StartC(){
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };
    console.log({text});
    <SetNick name={text}/>
    return(
        <>
            <div className="wrap">
                <img src={require("./img/cVelop_logo1.png")} alt="logo"/>
                <form>
                    <fieldset>
                        <legend>Set your NickName!</legend>
                        <input type="text" placeholder="write here!" onChange={onChange} value={text}/>
                        <Link to="/Nav">
                            <button>GO</button>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

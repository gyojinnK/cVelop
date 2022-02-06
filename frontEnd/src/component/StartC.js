import "./css/StartC.css"
import { Link } from "react-router-dom"

/* function nextPage(){
    let wrap = document.querySelector(".wrap");
    wrap.style.display = "none";
} */

export default function StartC(){
    return(
        <>
            <div className="wrap">
                <img src={require("./img/cVelop_logo1.png")} alt="logo"/>
                <form>
                    <fieldset>
                        <legend>Set your NickName!</legend>
                        <input type="text" placeholder="write here!"></input>
                        <Link to="/MainBoard">
                            <button>GO</button>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
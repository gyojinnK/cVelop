import "./css/Section.css"
import { Link } from "react-router-dom"

export default function Section(){
    function click(){
        let ot = document.querySelector(".isOpenTrue");
        ot.style.opacity = "100%";
        ot.style.transition = "1s";
        let cb = document.querySelector(".clickBtn");
        cb.style.visibility = "hidden";
    }
    
    return(
        <>
            <section>
                <div className="clickBtn" onClick={click}>Click_me</div>
                <div className="chatingArea isOpenTrue">
                    <div className="exText">
                        <input type="text" placeholder="Words are sharper than you think.^^"></input>
                        <button>Send</button>
                    </div>
                </div>
            </section>
            <Link to="/FrontToBack" style={{textDecoration : "none"}}>
                <button className="SRT">ServerRunningTest</button>
            </Link>
        </>
    )
}



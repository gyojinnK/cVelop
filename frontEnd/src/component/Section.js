import "./css/Section.css"
import { Link } from "react-router-dom"
import SectionSendBox from "./SectionSendBox";

export default function Section(){
    /* function click(){
        let ot = document.querySelector(".isOpenTrue");
        ot.style.opacity = "100%";
        ot.style.transition = "1s";
        let cb = document.querySelector(".clickBtn");
        cb.style.visibility = "hidden";
    } */
    function xHover(){
        let backBtn = document.querySelector(".linkImg");
        backBtn.style.display = "none"
        let backTxt = document.querySelector(".linkP");
        backTxt.style.display = "inline-block";
    }
    function xMouseOut(){
        let backBtn = document.querySelector(".linkImg");
        backBtn.style.display = "inline-block"
        let backTxt = document.querySelector(".linkP");
        backTxt.style.display = "none";
    }
    return(
        <>
            <section>
{/*                 <div className="clickBtn" onClick={click}>Click_me</div> */}
                <div className="chatingArea isOpenTrue">
                    <div className="exText">
                        <SectionSendBox className="Section_SB"/>
                        {/* ^ 이 컴포넌트가 Send박스 따로 분리한 컴포넌트입니다!! */}
                        <div className="linkWrap" onMouseOver={xHover} onMouseOut={xMouseOut}>
                            <Link to="/Chatlist" className="linkBackBtn">
                                <img className="linkImg" src={require('./img/close.png')} alt="logo" />
                                <p className="linkP">back</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



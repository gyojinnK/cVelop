import "./css/Footer.css"
import FrontToBack from "../FrontToBack"

export default function Footer(){
    return(
        <>
            <footer>
                <div className="footerWrap">
                    <dl>
                        <dt>Veloper</dt>
                        <dd>Kim_in_gi</dd>
                        <dd>Kang_gyo_jin</dd>
                    </dl>
                    <FrontToBack  className="ftbCom"/>
                </div>
            </footer>
        </>
    )
}
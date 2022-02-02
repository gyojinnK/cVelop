/* import cvLogo from "frontEnd/src/img/cVelop_logo2.png" */
import "./css/Header.css"

export default function Header(){
    return(
        <>
            <header>
                <div className="hWrap">
                    <img src={require('./img/cVelop_logo2.png')} alt="logo" />
                    <nav>
                        <p>menu1</p>
                        <p>menu2</p>
                    </nav>
                </div>
            </header>
        </>
    )
}
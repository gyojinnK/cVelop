import "./css/Header.css"
import SetNick from "./SetNick"

export default function Header(){
    return(
        <>
            <header>
                <div className="hWrap">
                    <img src={require('./img/cVelop_logo1.png')} alt="logo" />
                    <p>Chat</p>
                    <SetNick />
                </div>
            </header>
        </>
    )
}
import "./css/Header.css"

export default function Header(){
    return(
        <>
            <header>
                <div className="hWrap">
                    <img src={require('./img/cVelop_logo1.png')} alt="logo" />
                    <p>Chat</p>
                </div>
            </header>
        </>
    )
}
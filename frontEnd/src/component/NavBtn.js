import { Link } from "react-router-dom";
import "./css/NavBtn.css"

export default function NavBtn(){
    return(
        <>
            <nav>
                <Link className="link" to="/ChatList"><div className="navDiv">List</div></Link>
                <Link className="link" to="/Entrance"><div className="navDiv">Entrance</div></Link>
                <Link className="link" to="/"><div className="navDiv">Exit</div></Link>
            </nav>
        </>
    )
}
import { Link } from "react-router-dom";
import "./css/NavBtn.css"

export default function NavBtn(){
    return(
        <>
            <nav>
                <Link className="link" to="/ChatList">List</Link>
                <Link className="link" to="/Entrance">Entrance</Link>
                <Link className="link" to="/">Exit</Link>
            </nav>
        </>
    )
}
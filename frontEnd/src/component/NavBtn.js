import { Link } from "react-router-dom";
import "./css/NavBtn.css"

export default function NavBtn(){
    return(
        <>
            <nav>
                <Link className="link" to="/Header/ChatList">List</Link>
                <Link className="link" to="">Entrance</Link>
                <Link className="link" to="/">Exit</Link>
            </nav>
        </>
    )
}
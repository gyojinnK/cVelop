import { Link } from "react-router-dom";
import "./css/Entrance.css"

export default function Entrance(){

    function getForm(){
        let viewForm = document.querySelector(".formWrap");
        let hideWrap = document.querySelector(".entranceWrap");
        viewForm.style.display = "block";
        hideWrap.style.display = "none"
    }

    function submitBtnHover(){
        let btn = document.querySelector(".submitBtn");
        btn.value = 'Done!'
    }
    function submitBtnOut(){
        document.querySelector(".submitBtn").value = "Make Room"
    }
    function togglePwPopup(){
        document.querySelector(".togglePw").style.display = "inline-block"
    }
    function togglePwPopdown(){
        document.querySelector(".togglePw").style.display = "none"
    }
    return(
        <>
            <div className="entranceWrap">
                <button onClick={getForm}>MakeRoom!</button>
                <Link className="linkBtn" to="/Nav">
                    <button>back!</button>
                </Link>
            </div>
            <div className="formWrap">
                <form>
                    <fieldset>
                        <legend>[Set chatting Room]</legend>

                        <label className="label1" for="roomInput">Room Name</label>
                        <input className="input1" id="roomInput" type="text" />
                        <label className="label1" for="countInput">Head Count</label>
                        <input className="input1" id="countInput" type="text" />

                        <label for="publicBox">Public</label>
                        <input type="radio" id="publicBox" name="radio_box" checked onClick={togglePwPopdown}/>
                        <label for="privateBox">Private</label>
                        <input type="radio" id="privateBox" name="radio_box" onClick={togglePwPopup} />
                        <div className="togglePw">
                            <label for="privatePw">Password</label>
                            <input type="text" id="privatePw" />
                        </div>

                        <Link to="/ChatList">
                            <input className="submitBtn" type="submit" value="Make Room" onMouseOver={submitBtnHover} onMouseOut={submitBtnOut}/>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
/* 2 5 */

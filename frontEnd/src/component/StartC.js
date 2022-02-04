import "./css/StartC.css"

function nextPage(){
    let wrap = document.querySelector(".wrap");
    wrap.style.display = "none";
}

export default function StartC(){
    return(
        <>
            <div className="wrap">
                <img src={require("./img/cVelop_logo1.png")} />
                <form>
                    <fieldset>
                        <legend>Set your NickName!</legend>
                        <input type="text" placeholder="write here!" onKeyDown={nextPage}></input>
                        <button>GO</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
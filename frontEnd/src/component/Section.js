import "./css/Section.css"

export default function Section(){
    function click(){
        let ot = document.querySelector(".isOpenTrue");
        ot.style.opacity = "100%";
        ot.style.transition = "1s";
        let cb = document.querySelector(".clickBtn");
        cb.style.visibility = "hidden";
    }
    function replace(){
            if(document.querySelector(".clickBtn").style.visibility === "hidden"){
                let ot = document.querySelector(".isOpenTrue");
                ot.style.opacity = "0%"
                document.querySelector(".clickBtn").style.visibility = "visible";
        }
    }
    
    return(
        <>
            <section>
                <div className="clickBtn" onClick={click}>Click_me</div>
                <div className="chatingArea isOpenTrue">
                    <div className="exText">
                        Welcome<br/>
                        cV_chat^^!<br/>
                        <p onClick={replace}>Close</p>
                    </div>
                </div>
            </section>
        </>
    )
}



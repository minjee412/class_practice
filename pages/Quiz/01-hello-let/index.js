export default function(){

    function changeHello(){
        document.getElementById("hello").innerText = "반갑습니다."
    }

    return(
        <>
            <button id="hello" onClick={changeHello}>안녕하세요</button>
        </>
    )
}
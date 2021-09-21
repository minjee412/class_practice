export default function Counting (){
    
    function onClickCount(){
    
    let Num = Number(document.getElementById("count").innerText) + 1
    
    document.getElementById("count").innerText = Num 
    }

    return(
        <>
        <div id="count">0</div>
        <button onClick={onClickCount}>카운트증가</button>
        </>
    )
}

// let으로 count 예제 실험해보기
// function New() {
//     let count = 0     // let으로 **자바스크립트 변수** 만들기
    
//     function handleClick() {
//         count = count + 1     // 갯수는 증가했지만, 화면에는 **반영이 안됨**
                                // 이유 ? 화면에 나타내 주는 document.getElementById를 안해줘서
                                // 데신 console.log에는 올라 간다. 
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>let을 사용하여 count 증가</button>
//         </div>
//     )
// }

// export default New

// state로 count 예제 실험해보기
import { useState } from 'react'

function New() {
    const [count, setCount] = useState(0)     // state로 **컴포넌트 변수** 만들기
    
    function handleClick() {
        setCount(count + 1)     // 갯수가 증가하면서, 화면에 정상적으로 **반영됨**
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>state를 사용하여 count 증가</button>
        </div>
    )
}

export default New

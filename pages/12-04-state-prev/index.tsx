import { useState } from 'react'

export default function StatePrevPage(){
    const [ count, setCount ] = useState(0)

    function onClickCount (){
        // setCount( count + 1 ) 
        // setCount( count + 1 ) 
        // setCount( count + 1 ) 
        // setCount( count + 1 ) 
        // 아무리 많이 써도 +1싹 밖에 안됨

        setCount(prev => prev + 5 ) // 5씩 증가함
    }
    return(
        <div>
            <div>현재카운트:{count}</div>
            <button onClick={onClickCount}>count 증가</button>

        </div>
    )
}
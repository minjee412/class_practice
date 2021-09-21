import { useState } from 'react'

export default function Counting(){
    const [count, setCount] = useState(0)

    function Counting (){
        setCount(count + 1)
    }

    return(
        <>
        <div>{count}</div>
        <button onClick={Counting}>카운트증가</button>
        </>
    )

}
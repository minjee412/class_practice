import { useState } from 'react'


export default function (){
    const [ hello, setHello ] = useState('안녕하세요')

    function changeHello(){
        setHello("반갑습니다.")
    }
    
    return(
        <>
            <button onClick={changeHello}>{hello}</button>
        </>
    )

}
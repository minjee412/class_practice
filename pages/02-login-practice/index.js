import { useState } from 'react'

export default function Login(){

    const [ myId, setMyId ] = useState('')
    const [ errorId, setErrorId ] = useState('')
    
    const [ myPw, setMyPw ] = useState('')
    const [ errorPw, setErrorPw] = useState('')

    function onChangeId(event){
        setMyId (event.target.value)
    }

    function onChangePw(event){
        setMyPw (event.target.value)
    }

    function onClickBtn(){
        if (myId === ''){
            setErrorId ("아이디를 입력하세요.")
        }

        if (myPw  === ''){
            setErrorPw ("비밀번호를 입력하세요.")
        }

        if (myId !== "" && myPw !== ""){
            alert("등록 되었습니다.")
        }
    }

    return(
        <>
            <div>로그인 페이지</div>
            아이디 : <input type="text" onChange={onChangeId}></input> <br/>
            <div style={{color: 'red'}}>{errorId}</div>
            비밀번호 : <input type ="text" onChange={onChangePw}></input> <br/>
            <div style={{color: 'red'}}>{errorPw}</div>
            <button onClick={onClickBtn}>로그인</button>
        </>
    )


}
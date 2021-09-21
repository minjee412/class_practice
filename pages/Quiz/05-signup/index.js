import { useState } from 'react'

export default function SignUp (){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordCheck, setPasswordCheck ] = useState('')

    const [ errorEmail, setErrorEmail ] = useState('')
    const [ errorPW, setErrorPW ] = useState('')
    

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePW(event){
        setPassword(event.target.value)
    }

    function onChangePWCheck(event){
        setPasswordCheck(event.target.value)
    }

    function onClickSignUp(){
        if(email.includes("@")){
            setErrorEmail(" ")
        } else{
            setErrorEmail("@가 없습니다.")
        }

        if(password === passwordCheck){
            setErrorPW(" ")
        } else{
            setErrorPW("비밀번호가 다릅니다.")
        }
    }


    return(
        <>
            이메일: <input type="text" onChange={onChangeEmail}></input> <br/><br/>
            <div style={{color:"red"}}>{errorEmail}</div>
            비밀번호: <input type="text" onChange={onChangePW}></input> <br/><br/>
            비밀번호 확인: <input type="text" onChange={onChangePWCheck}></input> <br/><br/>
            <div style={{color:"red"}}>{errorPW}</div>
            <button onClick={onClickSignUp}>가입하기</button>
        </>
    )

}
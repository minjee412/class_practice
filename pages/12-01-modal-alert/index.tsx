import {Modal} from 'antd'

export default function ModalAlrertPage(){
    
    function onClickSuccess(){
        try{
            Modal.confirm({content: "게시물 등록에 성공 했습니다."}) // alert("게시물 등록에 성공 했습니다.")
        } catch(error){
            Modal.error({content:"게시물 등록에 실패 했습니다."}) // alert("게시물 등록에 실패 했습니다.")
        }
    }

    function onClickFail(){
        try{
            throw new Error('강제로 에러 발생 시키기') //(throw)강제로 에러 발생 시키는 코드
        } catch(error){
            Modal.error({content: error.message}) // alert(error.message) // throw 안의 에러 메세지 불러 오기
        }

    }


    return(
        <>
            <button onClick={onClickSuccess}>알림창 (성공했을때)</button>
            <button onClick={onClickFail}>알림창 (실패했을때)</button>
        </>
    )
}
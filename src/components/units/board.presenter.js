import { Button, Input } from './board.style'

export default function BoardPresenter(props){

    return(
        <>  <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            작성자: <Input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <Input type="text" onChange={props.onChangeMyTitle} /><br />
            내용: <Input type="text" onChange={props.onChangeMyContents} /><br />
            {!props.isEdit && <Button onClick={props.aaa}>등록하기</Button>}
            {props.isEdit &&<Button onClick={props.aaa}>수정하기</Button>}
        </>
    )

}
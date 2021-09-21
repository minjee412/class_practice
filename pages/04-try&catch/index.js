import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String ){
    createBoard(writer: $writer, title: $title, contents: $contents
    ){
        number
        message
    }
}
`

// function 앞에 async useMutation 실행하는 함수 앞에 await

export default function tryCatch(){
    const [aaa] = useMutation (CREATE_BOARD)
    
    async function clickRegister(){
        try{
            const result = await aaa({
                variables:{
                    writer: "철수",
                    title: "반갑습니다.",
                    contents: "내일 만나요." 
                }
            })
            console.log(result.data.createBoard.number)
        } catch(error) { 
            console.log(error) 
        }
        
    } return (
            <button onClick={clickRegister}>등록하기</button>
    )
}
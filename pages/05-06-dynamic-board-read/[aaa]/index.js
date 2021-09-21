import gql from '@apollo/client'
import { useRouter } from 'next/router'

const BOARD_QUERY = gql`
    query fetchBoard($boardId: ID){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function DetailPage(){
    const router = useRouter()
    
    const {data} = useQuery(BOARD_QUERY,{ variables: { boardId : router.query.number} })
    console.log(data)


    return(
        <>
        <div>상세 페이지 입니다.</div>

        
        <div>제목: {data ? data.fetchBoard.writer: "loading..."}</div>
        <div>내용: {data ? data.fetchBoard.title: "loading..."}</div>
        <div>작성자: {data ? data.fetchBoard.contents: "loading..."}</div>
    
    </>
    )
    
}
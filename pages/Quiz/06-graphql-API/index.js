
import {gql, useMutation} from '@apollo/client'


const GraphQLMutation = gql`
mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
}
`

export default function graphql(){
    const [mutation] = useMutation(GraphQLMutation)

    async function onClickGraphql(){

        const result = await mutation({
            variables: {
                writer: "영희",
                title: "안녕하세요.",
                contents: "반가워요."
            }
        })
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(
        <>
            <button onClick={onClickGraphql}>GRAPHQL-API 요청하기</button>
        </>
    )

}
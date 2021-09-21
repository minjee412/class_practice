import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "훈이", title: "안녕하세요.", contents: "반갑습니다."
        ){
            _id
            number
            message
        }
    }

`

export default function GraphqlMutation(){
    // createBoard는 mutation을 실행하기 위한 단순한 이름
    const[aaa] = useMutation(CREATE_BOARD)

    async function Register(){
        // useMutaion을 실행한다.(createBoard가 mutation을 실행하기 위한 이름)
        const result = await aaa()
        // const result = createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
                                        //fetchBoard에서 받는 값이 number 
    }

    return(
        
        <button onClick={Register}>게시물 등록 하기</button>
        // 항상 같은 내용만 등록 된다.
        
    )

}

// import { useMutation, gql } from '@apollo/client'

// const CREATE_BOARD = gql`
//     mutation{
//         createBoard(writer:"영희", title:"안녕하세요! 영희입니다.", contents:"내용"){
//             number
//             message
//         }
//     }
// `

// export default function GraphqlMutationBoard1Page(){
//     const [ createBoard ] = useMutation(CREATE_BOARD)

//     async function aaa(){
//         const result = await createBoard()
//         console.log(result)
//         console.log(result.data.createBoard.number)
//     }

//     return (
//         <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
//     )
// }
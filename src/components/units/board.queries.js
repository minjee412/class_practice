import { gql } from '@apollo/client'


export const CREATE_BOARD = gql`
    # 여기는 자바스크립트 주석입니다
    mutation createBoard($writer: String, $title: String, $contents: String    ) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            message
        }
    }
`
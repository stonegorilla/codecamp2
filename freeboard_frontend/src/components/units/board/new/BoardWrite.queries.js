import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($aaa: CreateBoardInput!){
        createBoard(createBoardInput: $aaa){
            _id
        }
    }
`
import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($aaa : ID!){
        deleteBoard(boardId : $aaa )
    }
`
import {
    Row,
    Column
} from './BoardList.styles'

import {getDates} from '../../../../commons/libraries/utils'


export default function BoardListUI(props) {
    return (
        <div>
            <Row>
                    <Column><input type="checkbox" /></Column>
                    {/* <Column>번호</Column> */}
                    <Column>작성자</Column>
                    <Column>제목</Column>
                    {/* <span>{data.contents}</span> */}
                    <Column>작성일</Column>
                </Row>
            {props.qqq?.fetchBoards.map((data,index) =>(
                <Row key={data._id}>
                    <Column><input type="checkbox"  /></Column>
                    {/* <Column>{index}</Column> */}
                    <Column>{data.writer}</Column>
                    <Column onClick={props.aaa} id={data._id}>{data.title}</Column>
                    {/* 이벤트 핸들러 함수 */}
                    {/* <span>{data.contents}</span> */}
                    <Column>{getDates(data.createdAt)}</Column>
                    <Column><button id={data._id} onClick={props.Delete}>삭제하기</button></Column>
                </Row>
            ))}

        </div>
    )
}

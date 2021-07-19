import styled from '@emotion/styled'

// styled 나오면 그냥 css 구나 생각하면 됨

// 왠만하면 태그는 의미가 있는 태그로 이름을 지을 것

export const Wrapper = styled.div`
    width : 1200px;
    height : 1847px;
    // margin은 나중에 설정할듯,
    margin-top : 100px;
    margin-left : 100px;
    padding-left:101px;
    padding-right: 103px;
    border : 1px solid;
    box-shadow : 2px 4px 13px rgba(0,0,0, 0.7);
`


export const HeadWrapper = styled.div`
    width : 100%;
    height : 173px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-bottom : 20px;

`
export const Title = styled.h1`
    // 그냥 h1
`
export const NameWrapper = styled.div`
    display : flex;
    justify-content : left;

`

export const WriterPasswordWrapper = styled.div`
    width : 100%;
    height : 92px;
    display : flex;
    justify-Content : space-between;
    align-items : center;

`
export const TextInputWrapper = styled.div`
    height : 92px;
    display : flex;
    flex-direction : column;
    justify-Content : space-between;
    margin-bottom : 40px;
`

export const TextAreaInputWrapper = styled.div`
    height : 520px;
    display : flex;
    flex-direction : column;
    justify-Content : space-between;
    margin-bottom : 40px;
`
export const TextZipCodeInputWrapper = styled.div`
    height : 92px;
    display : flex;
    flex-direction : column;
    justify-Content : space-between;
    margin-bottom : 16px;
`

export const TextAddressInputWrapper = styled.div`
    height : 52px;
    display : flex;
    flex-direction : column;
    justify-Content : top;
    margin-bottom : 16px;
`
export const TextAddressBottomInputWrapper = styled.div`
    height : 52px;
    display : flex;
    flex-direction : column;
    justify-Content : top;
    margin-bottom : 40px;
`

export const ZipCodeWrapper = styled.div`
    width : 217px;
    height : 52px;
    display : flex;
    justify-Content : space-between;


`
export const TextPictureWrapper = styled.div`
    height : 118px;
    display : flex;
    flex-direction : column;
    justify-Content : space-between;
    margin-bottom : 40px;
`
export const UploadWrapper = styled.div`
    width : 282px;
    display : flex;
    justify-Content : space-between;

`
export const Box = styled.div`
    width : 78px;
    height : 78px;
    margin-bottom : 40px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    background-color: gray;
`

export const TextRadioWrapper = styled.div`
    height : 64px;
    display : flex;
    flex-direction : column;
    justify-Content : space-between;
    margin-bottom : 80px;
`
export const RadioButtonWrapper = styled.div`
    width : 172px;
    height : 100%;
    display : flex;
    justify-content: space-between;
`
export const BtnWrapper = styled.div`
    width:100%;
    height : 52px;
    margin-bottom : 100px;
    display: flex;
    justify-content: center;
`

export const Name = styled.div`
    font-size : 16px;
    margin-bottom : 16px;
`
export const NameYellow = styled.span`
    font-size : 16px;
    color : #ffd600;
    margin-bottom : 16px;
`
export const NameRed = styled.div`
    color : red;
    font-size : 16px;
`


export const InputShort = styled.input`
    width : 486px;
    height : 52px;

`
export const Input = styled.input`
    width : 996px;
    height : 52px;

`
export const InputContent = styled.textarea`
    width : 996px;
    height : 480px;

`
export const InputZipCode = styled.input`
    width : 77px;
    height : 52px;


`
export const Inputradio = styled.input`

`

export const Button = styled.button`
    width : 124px;
    height : 52px;
    margin-bottom : 40px;
    background-color: black;
    color : white;
    border : 0px;
`


export const ButtonYellow = styled.button`
    width : 179px;
    height : 52px;
    background-color: ${props => props.active ? 'gray' : 'yellow'};
    border : 0px;
`

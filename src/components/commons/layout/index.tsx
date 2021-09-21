import styled from '@emotion/styled'

const Wrapper = styled.div``

const Header = styled.div`
    height: 50px;
    background-color: coral;
    font-family: "myfont"; //글로벌스타일에서 만든 폰트
`
const Banner = styled.div`
    height: 200px;
    background-color: pink;
`
const BodyWrapper = styled.div`
    display: flex;
    height: 100%;
`
const Sidebar = styled.div`
    width: 30%;
    background-color: orange;
`
const Body = styled.div``
const Footer = styled.div`
    height: 50px;
    background-color: green;
`

export default function Layout(props){

    return(
        <Wrapper>
            <Header>Header Area</Header>
            <Banner>배너 영역 입니다.</Banner>
            <BodyWrapper>
            <Sidebar>사이드바 영역 입니다.</Sidebar>
            <Body>{props.children}</Body>
            </BodyWrapper>
            <Footer>푸터 영역입니다.</Footer>
        </Wrapper>
    )

}
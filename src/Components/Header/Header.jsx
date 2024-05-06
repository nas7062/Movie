import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.div`
    position:fixed;
    z-index:1;
`
const Logo = styled.div`
    font-size:2.3rem;
    font-weight:800;
    position:fixed;
    top:0;
    left:2%;
`
const Ul = styled.ul`
    display:flex;
    position:fixed;
    top:0;
    left:10%;
    z-index:1;
    & > li {
        font-weight:800;
        margin:0px 20px;
    }
`
const Li = styled.li`
position:fixed;
left:90%;
`

export default function Header() {
    return (
        <Head>
            <Link to="/">
                <Logo>
                    10012
                </Logo>
            </Link>
            <Ul>
                <li><Link to="/"> 홈</Link></li>
                <li><Link to="/drama"> 드라마</Link></li>
                <li><Link to="/horror"> 호러</Link></li>
                <li><Link to="/"> 로맨스</Link></li>
                <li><Link to="/drama"> 코미디</Link></li>
                <li><Link to="/horror"> 액션</Link></li>

                <Li>로그인</Li>

            </Ul>

        </Head>

    );
}
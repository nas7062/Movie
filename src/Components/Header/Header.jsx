import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.div`
    position:fixed;
`
const Logo =styled.div`
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
export default function Header()
{
    return(
        <Head>
            <Link to="/">
            <Logo>
                10012
            </Logo>
            </Link>
            <Ul>
                <li>홈</li>
                <li>영화</li>
                <li>드라마</li>
                <li>호러</li>
                <li>로맨스</li>
                <li>코미디</li>
                <li>액션</li>
            </Ul>
            
        </Head>

    );
}
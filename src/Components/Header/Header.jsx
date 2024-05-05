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
                <li><Link to="/"> 홈</Link></li>
                <li><Link to="/"> 영화</Link></li>
                <li><Link to="/"> 드라마</Link></li>
                <li><Link to="/horror"> 호러</Link></li>
                <li><Link to="/"> 로맨스</Link></li>
                <li><Link to="/"> 코미디</Link></li>
                <li><Link to="/"> 액션</Link></li>
            </Ul>
            
        </Head>

    );
}
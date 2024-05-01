import styled from "styled-components";

const Logo =styled.div`
    font-size:2.3rem;
    font-weight:800;
    position:absolute;
    top:0;
   
`
export default function Header()
{
    return(
        <div>
            <Logo>
                10012
            </Logo>
            <ul>
                <li>홈</li>
                <li>영화</li>
                <li>드라마</li>
                <li>호러</li>
                <li>로맨스</li>
                <li>코미디</li>
                <li>액션</li>
            </ul>
            
        </div>

    );
}
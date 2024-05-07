import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../../firebase/firebase";
import { useSelector } from "react-redux";
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
const Li2 = styled.li`
    position:fixed;
    left:82%;
    & >  a span {
        color:red;
    }
`

export default function Header() {
    const [currentuser,setcurrentuser] = useState(authService.currentUser);
    const count = useSelector((state)=>state.Cart.Cart);
    const Logout = () =>{
        authService.signOut();
        currentuser(null);
    }
    console.log(count);
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
                <Li2><Link to="/cart">찜해두기<span> {count.length}</span></Link></Li2>
                {!currentuser ? <Li><Link to="/auth">로그인</Link></Li> : 
                <Li><Link  onClick={()=>Logout()}>로그아웃</Link></Li>}
                

            </Ul>

        </Head>

    );
}
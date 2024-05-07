import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from '../../firebase/firebase';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
width:500px;
height:300px;
border:1px solid grey;

 
`
const Input =styled.input`
    display:block;
    width:300px;
    height:50px;
    position:relative;
    left:20%;
    margin-top:20px;
    font-size:1.3rem;
`
const Span = styled.span`

position:relative;
top:20px;
 `
const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const navigate = useNavigate();
    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data ;
            if(newAccount){
                data = await createUserWithEmailAndPassword(authService, email, password);
                alert("회원가입 완료!");
            } 
                
            else 
            {
                data = await signInWithEmailAndPassword(authService, email, password);
                alert("로그인 완료!");
                navigate("/");
            }
                
        
    }

    return (
        <div>
            <Header/>
            <Form onSubmit={onSubmit}>
                <Input
                    name="email"
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChange} />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange} />
                <Input
                    type="submit"
                    value={newAccount? "회원가입" : "로그인"} />
            </Form>
            <Span onClick={toggleAccount}>{newAccount? "로그인하러 가기" : "아이디가 없을경우? 회원가입"}</Span>
            
        </div>
    )
}

export default Auth;
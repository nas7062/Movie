import React from "react";
import {useDispatch, useSelector} from "react-redux"
import Header from "../Header/Header";
import styled  from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
    width:200px;
    height:300px;
    position:relative;
    left:0px;
    top:50px;
`
const Item =styled.div`
   
    height:400px;
    position:relative;
    margin-top:50px;
`
const Descript = styled.div`
    display:inline-block;
    position:relative;
    top:0px;
    width:700px;
    
`
const Btn = styled.button`
    background-color:black;
    margin-left:40px;
    color:white;
    position:relative;
    left:100px;
`
export default function Cart()
{
    const cart =useSelector((state)=>state.Cart.Cart);
    const dispatch = useDispatch();
    return(
        <div>
            <Header/>
            {cart.map((item,idx)=>{
                    return(
                        <Item key={item.id}>
                            <Img src={item.medium_cover_image} alt="" />
                            <Descript>
                                <p>{item.title_long}</p>
                                <span>{item.description_full}</span>       
                                <p>rating : {item.rating}</p>
                                <span>genres : {item.genres}</span>
                            </Descript>
                            <div>
                                <Link to={`/movie/${item.id}`}>
                                <Btn>상세보기</Btn>
                                </Link>
                                <Btn>재생하기</Btn>
                            </div>
                        </Item>

                    );

            })}
        </div>

    );
}
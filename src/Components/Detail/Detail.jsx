import React, { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../reducer/cartslice";
import { authService } from "../../firebase/firebase";
import Header from "../Header/Header";

const Logo = styled. div`
    font-size:1.8rem;
    text-align:center;
    position:relative;
    top:-20px;
    
`
export default function Detail()
{
    const {id} = useParams();
    const cart = useSelector((state)=>state.Cart.Cart);
    const [movies,setmovies] = useState([]);
    const [currentuser,setcurrentuser] = useState(authService.currentUser);
    const dispatch  = useDispatch();
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
            setmovies(request.data.data.movie);
        }
        fetchData();
    },[id]);
    const AddCart = () =>{
        if(movies && currentuser)
            {
                dispatch(addCart(movies));
            }
    }
    console.log(cart);
    return(
        <div>
            <Header/>
            <Link to="/">
            <Logo>    
                10012
            </Logo>
            </Link>
            <img src={movies.large_cover_image} alt="" />
            <h2>{movies.title}</h2>
            <p>Year: {movies.year}</p>
            <p>Genres: {movies.genres}</p>
            <p>{movies.description_full}</p>
            <button onClick={AddCart}>Add to Cart</button>
        </div >


    );
}
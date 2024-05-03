import React, { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import styled from "styled-components";

const Logo = styled. div`
    font-size:1.8rem;
    text-align:center;
    position:relative;
    top:-20px;
    
`
export default function Detail()
{
    const {id} = useParams();
    const [movies,setmovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
            setmovies(request.data.data.movie);
        }
        fetchData();
    },[id]);

    console.log(movies);
    return(
        <div>
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
        </div >


    );
}
import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios";
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
            <h2>{movies.title}</h2>
            <p>{movies.description_full}</p>
            <p>Year: {movies.year}</p>
        </div>


    );
}
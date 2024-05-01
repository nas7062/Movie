import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";

export default function Home()
{
    const [loading,setloading] = useState(true);
    const [movies,setmovies] = useState([]);

    const GetMovies = async () =>{
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=${
                  Math.random() * 10
                }&sort_by=year`
              )).json();
        setmovies(json.data.movies);
        setloading(false);
    }
    useEffect(()=>{
        GetMovies();
    },[]);
    console.log(movies);
    return(
        <div>
            <Header/>
            {movies.map((movie)=>(
                <Movie
                    key={movie.id}
                    id ={movie.id}
                    year={movie.year}
                    Img={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))}
        </div>

    );
}
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import styled from "styled-components";

const Movies = styled.div`
    height:1000px;
    position:relative;
    top:500px;
    width:1500px;
    left:-200px;
`
const More = styled.button `
    position:relative;
    background-color:gray;
`
export default function DramaMovie()
{   
    const [movies,setmovies]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const GetMovies = async () => {
            const response = await fetch(
                 (
                    `https://yts.mx/api/v2/list_movies.json?minimum_rating=5&sort_by=year&page=${currentPage}&genre=horror`
                ));
                const json = await response.json();
                setmovies(prevMovies => [...prevMovies, ...json.data.movies]);
        }
        GetMovies();
    }, [currentPage]);
   
    const loadMoreMovies = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    
    return(
        <Movies>
            {movies.map((movie)=>(
                <Movie  key={movie.id}
                id={movie.id}
                year={movie.year}
                Img={movie.medium_cover_image}
                title={movie.title}
                    summary={movie.summary}
                genres={movie.genres}/>
            ))}
            <More onClick={loadMoreMovies}>Load More...</More>
        </Movies>
    );
}
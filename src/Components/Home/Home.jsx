import { useEffect, useRef, useState } from "react";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import img from "../../assets/images.jpg";
import styled from "styled-components";
import Slider from "react-slick"
import { Link } from "react-router-dom";
const Img = styled.img`
    width:100%;
    position:absolute;
    top:100px;
    left:0%;
    height:800px;
    display:inline-block;
`
const Btn = styled.button`
    position:relative;
    top:600px;
    margin-right:20px;
    left:-700px;
    background-color:black;
    color:white;
    font-size:1.8rem;
`
const Movies = styled(Slider)`
    position:relative;
    top:900px;
    width:100px;
    left:-900px;
    height:400px;
    display:inline-block;
    .slick-list {
        overflow: visible; 
    }
    .slick-slide {
        padding: 0 100px; 
    }
    .slick-track {
        display: flex ;
        align-items: center; 
    }
    .slick-prev,
    .slick-next {
        font-size:1.3em;
        color: black; 
        z-index: 1; 
    }
    .slick-prev {
        left: 0px; 
        position:relative;
        top:200px;
    }
    .slick-next {
        right: -1600px; 
        position:relative;
        top:-780px;
    }
    @media (max-width: 768px) {
        .slick-prev,
        .slick-next {
            font-size: 18px; 
        }
    }
`
const Title = styled.span`
    position:relative;
    top:-130px;
    font-size:1.8rem;
    left:100px;
`

export default function Home() {
    const [loading, setloading] = useState(true);
    const [movies, setmovies] = useState([]);
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 2000,
    };
    const GetMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=${Math.random() * 10
                }&sort_by=year`
            )).json();
        setmovies(json.data.movies);
        setloading(false);
    }
    useEffect(() => {
        GetMovies();
    }, []);
   
    return (
        <div>
            <Header />
            <div>
                <Img src={img} alt="" />
                <Btn>재생</Btn>
                <Btn>상세 정보</Btn>
            </div>
            <Title>영화 추천</Title>
            <Movies {...settings}>
                
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        Img={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}

            </Movies>
        </div>

    );
}
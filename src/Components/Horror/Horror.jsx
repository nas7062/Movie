import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import styled from "styled-components";
import Slider from "react-slick";
import HorrorModal from "./HorrorModal";
import HorrorMovie from "./HorrorMoive";


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
`;

const Title = styled.span`
position:relative;
top:-130px;
font-size:1.8rem;
left:100px;/
`;
const Img = styled.img`
    width:100%;
    position:absolute;
    top:0px;
    left:0%;
    height:800px;
    display:inline-block;
`
const Horror = () => {
  const [loading, setLoading] = useState(true);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchHorrorMovies = async () => {
     
        const response = await fetch(
          `https://yts.mx/api/v2/list_movies.json?genre=horror&sort_by=year`
        )
        const { data } = await response.json();
        setHorrorMovies(data.movies);
        setLoading(false);
      
       
      
    };

    fetchHorrorMovies();
  }, []);

  const handleMovieClick = (movieId, event) => {
    const clickX = event.clientX;
    const clickY = event.clientY - 100;
    setModalPosition({ x: clickX, y: clickY });
    setSelectedMovieId(movieId);
    setIsModal(!isModal);
  };
  console.log(horrorMovies);
  return (
    <>
      {!loading ? (
        <div>
          <Header />
          <div>
                <Img src={horrorMovies && horrorMovies[1].large_cover_image} alt="" />    
            </div>
          <Title>호러 영화 추천</Title>
          <Movies {...settings}>
            {horrorMovies.map((movie) => (
              <div key={movie.id} onClick={(event) => handleMovieClick(movie.id, event)}>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  Img={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
                {selectedMovieId === movie.id && isModal && (
                  <HorrorModal movieId={movie.id} clickPosition={modalPosition} />
                )}
              </div>
            ))}
          </Movies>
          
        </div>
      ) : (
        "Loading..."
      ) }
      <HorrorMovie/>
    </>
  );
};

export default Horror;

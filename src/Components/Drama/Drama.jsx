import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import styled from "styled-components";
import Slider from "react-slick";
import DramaModal from "./DramaModal";
import DramaMoive from "./DramaMoive";


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
top:-20px;
font-size:1.8rem;
left:100px;/
`;
const Img = styled.img`
    width:100%;
    position:absolute;
    top:80px;
    left:0%;
    height:800px;
    display:inline-block;
`
const Drama = () => {
  const [loading, setLoading] = useState(true);
  const [DramaMovies, setDramaMovies] = useState([]);
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
          `https://yts.mx/api/v2/list_movies.json?genre=drama&sort_by=year`
        )
        const { data } = await response.json();
        setDramaMovies(data.movies);
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
 
  return (
    <>
      {!loading ? (
        <div>
          <Header />
          <div>
                <Img src={DramaMovies && DramaMovies[1].large_cover_image} alt="" />    
            </div>
          <Title>드라마 추천</Title>
          <Movies {...settings}>
            {DramaMovies.map((movie) => (
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
                  <DramaModal movieId={movie.id} clickPosition={modalPosition} />
                )}
              </div>
            ))}
          </Movies>
          
        </div>
      ) : (
        "Loading..."
      ) }
      <DramaMoive/>
    </>
  );
};

export default Drama;

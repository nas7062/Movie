import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const DramaModalBody = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  padding: 40px;
  left: 20%;
  top: 10%;
  text-align: center;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  color: white;
  top: ${({ clickPosition }) => clickPosition.y}px;
  left: ${({ clickPosition }) => clickPosition.x}px;

  & > button {
    background-color: grey;
    color: black;
    margin-right: 10px;
  }

  & > span {
    margin-left: 10px;
    color: red;
    display: inline-block;
  }

  & > p {
    margin: 0px;
    display: block;
    margin-left: 10px;
  }
`;

const ModalImg = styled.img`
  width: 300px;
  height: 150px;
`;

const DramaModal = ({ movieId, clickPosition,  }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
        );
        setMovie(response.data.data.movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <Back>
      <DramaModalBody clickPosition={clickPosition}>
        <ModalImg src={movie.medium_cover_image} alt="" />
        <button>재생하기</button>
        <Link to={`/movie/${movieId}`}>
          <button>상세 정보</button>
        </Link>
        <p>{movie.title}</p>
        <p>{movie.runtime} min</p>
        <p>{movie.year}</p>
        {movie.genres &&
          movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        
      </DramaModalBody>
    </Back>
  );
};

export default DramaModal;

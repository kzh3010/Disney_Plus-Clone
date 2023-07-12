import React, { useCallback, useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = () => {};
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
      </div>
      <div id={id} className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      <div className="slider__arrow-right">
        <span
          className="arrow"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

export default Row;

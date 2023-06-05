import React from "react";
import "./content.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../shared/ThemeContext";
import { Button, Card, Typography } from "@mui/material";

function FilmPresentation({ films }) {
  const [openModal, setOpenModal] = useState(false);
  const [filmDetail, setFilmDetail] = useState();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='container'>
      <div className={"card-list " + theme}>
        {films.map((film) => (
          <Card className='card' key={film.id}>
            <img src={film.img} />
            <Typography mb={5} variant='h5'>
              {film.title}
            </Typography>

            <Button selected variant='contained' className='detail-btn'>
              <Link to='/detail'>Detail</Link>
            </Button>

            {/* <button className='detail-btn' onClick={}>
              <Link>Detail</Link>
            </button> */}
            {/* <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FilmPresentation;

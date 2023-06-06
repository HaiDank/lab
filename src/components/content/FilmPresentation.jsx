import React from "react";
import "./content.css";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../shared/ThemeContext";
import { Box, ButtonBase, Card, Typography } from "@mui/material";
import FilmDetail from "./FilmDetail";

function FilmPresentation({ films }) {
  const [openModal, setOpenModal] = useState(false);
  const [filmDetail, setFilmDetail] = useState();
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    setOpenModal(true);
    console.log(filmDetail);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className='container'>
      <div className={"card-list " + theme}>
        {films.map((film) => (
          <Card className='card' key={film.id}>
            <ButtonBase
              sx={{ borderRadius: "0.5rem", overflow: "hidden" }}
              onClick={() => {
                handleClick(), setFilmDetail(film);
              }}
            >
              <img src={film.img} />
              <Box className='film-title'>
                <Typography variant='h5'>{film.title}</Typography>
              </Box>
            </ButtonBase>

            {/* <Typography mb={5} variant='h5'>
              {film.title}
            </Typography>

            <Button selected variant='contained' className='Id-btn'>
              <Link to='/Id'>Id</Link>
            </Button> */}

            {/* <button className='Id-btn' onClick={}>
              <Link>Id</Link>
            </button> */}
            {/* <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p> */}
          </Card>
        ))}
      </div>
      {openModal && (
        <FilmDetail
          open={openModal}
          filmDetail={filmDetail}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default FilmPresentation;

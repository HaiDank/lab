import React from "react";
import "./content.css";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../shared/ThemeContext";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
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
    <Container>
      <Box className={"card-list " + theme}>
        {films.map((film) => (
          <Card className='card' key={film.id}>
            <CardActionArea
              onClick={() => {
                handleClick(), setFilmDetail(film);
              }}
            >
              <CardMedia component='img' image={film.img} />
              <Box className='film-title'>
                <Typography variant='h5'>{film.title}</Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {openModal && (
        <FilmDetail
          open={openModal}
          filmDetail={filmDetail}
          onClose={handleClose}
        />
      )}
    </Container>
  );
}

export default FilmPresentation;

import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import "./filmDetail.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function FilmDetail({ open, filmDetail, onClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <div className='film-detail'>
          <div className='iframe-container'>
            <iframe
              className='film-trailer'
              src={filmDetail.trailer}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>

          {/* <IconButton className='play-btn'>
            <PlayCircleOutlineIcon
              sx={{ fontSize: 40 }}
              style={{ color: "red" }}
            />
          </IconButton> */}

          <Stack className='film-info'>
            <Typography variant='h5'>{filmDetail.title}</Typography>
            <p>Year: {filmDetail.year}</p>
            <p>Nation: {filmDetail.nation}</p>
          </Stack>
        </div>
      </Dialog>
    </>
  );
}

export default FilmDetail;

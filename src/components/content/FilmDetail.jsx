import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
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
        maxWidth='md'
        scroll='body'
        // sx={{ overflowY: "scroll" }}
        PaperProps={{
          sx: {
            backgroundColor: "#121212",
            margin: "0",
            top: "1em",
            width: "100%",
            maxHeight: "200%",
            height: "fit-content",
            boxSizing: "content-box",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            padding: "0",
            overflowY: "visible",
          }}
        >
          <Box
            className='iframe-container'
            sx={{
              aspectRatio: "16/9",
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          >
            <div className='film-title'>
              <Typography
                variant='h3'
                color='white'
                sx={{
                  position: "absolute",
                  bottom: "30%",
                  left: "7%",
                }}
              >
                {filmDetail.title}
              </Typography>
            </div>

            <iframe
              className='film-trailer'
              src={filmDetail.trailer}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </Box>

          {/* <IconButton className='play-btn'>
            <PlayCircleOutlineIcon
              sx={{ fontSize: 40 }}
              style={{ color: "red" }}
            />
          </IconButton> */}

          <Box className='film-info'>
            <p>Year: {filmDetail.year}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
            <p>Nation: {filmDetail.nation}</p>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FilmDetail;

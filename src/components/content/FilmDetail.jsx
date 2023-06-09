import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./filmDetail.css";

function FilmDetail({ open, filmDetail, onClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth='md'
        scroll='body'
        PaperProps={{
          sx: {
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
            <DialogActions
              sx={{
                zIndex: "1000",
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
              }}
            >
              <Button
                onClick={onClose}
                sx={{
                  borderRadius: "50%",
                  aspectRatio: "1/1",
                  bgcolor: "rgba(200,200,200,0.1)",
                }}
              >
                <Typography variant='h6' color='white' fontWeight='bold'>
                  &times;
                </Typography>
              </Button>
            </DialogActions>
            <Box className='detail-film-title'>
              <Typography
                variant='h3'
                color='white'
                sx={{
                  position: "absolute",
                  bottom: "30%",
                  left: "7%",
                  width: "50%",
                }}
              >
                {filmDetail.title}
              </Typography>
            </Box>

            <iframe
              className='film-trailer'
              src={filmDetail.trailer}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </Box>

          <Box padding='2rem 2rem'>
            <Grid container wrap='nowrap' spacing='2rem'>
              <Grid item xs='8'>
                <Typography variant='subtile2' display='block' mb={2}>
                  {filmDetail.year} {filmDetail.duration}
                </Typography>
                <FormLabel>
                  <Typography variant='h5'>Description</Typography>
                </FormLabel>
                <Typography variant='body1'>
                  {filmDetail.description}
                </Typography>
              </Grid>
              <Grid item xs='4'>
                <Grid>
                  <FormLabel>
                    <Typography variant='subtile2'>Director: </Typography>
                  </FormLabel>
                  <Typography variant='subtile2'>
                    {filmDetail.directors}
                  </Typography>
                </Grid>
                <Grid>
                  <FormLabel>
                    <Typography variant='subtile2'>Actors: </Typography>
                  </FormLabel>
                  <Typography variant='subtile2'>
                    {filmDetail.actors}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FilmDetail;

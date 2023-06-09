import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function News() {
  return (
    <Container>
      <Grid container maxHeight='100%' spacing={2}>
        <Grid
          item
          container
          direction='column'
          justifyContent='center'
          alignItems='stretch'
          md='7'
          spacing={2}
          height='100%'
        >
          <Grid item>
            <Card>
              <CardActionArea component={Link} to='1'>
                <CardMedia component='img' image='./assets/images/news1.avif' />
                <Box
                  className='film-title'
                  justifyContent='start'
                  height='auto'
                >
                  <Typography variant='h5'>
                    ‘Spider-Man: Across the Spider-Verse’: Does Marvel Need One
                    Set of Multiverse Rules?
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <CardActionArea component={Link} to='2'>
                <CardMedia component='img' image='./assets/images/news2.avif' />
                <Box
                  className='film-title'
                  justifyContent='start'
                  height='auto'
                >
                  <Typography variant='h5'>
                    This Is the Key to the Perfect Multiverse Movie
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md='5'
          spacing={2}
          justifyContent='stretch'
          alignItems='stretch'
        >
          <Grid item md='6'>
            <Card
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <CardActionArea
                sx={{ height: "100%", width: "100%" }}
                component={Link}
                to='3'
              >
                <CardMedia
                  sx={{ objectFit: "cover", height: "100%", width: "100%" }}
                  component='img'
                  image='./assets/images/news3.avif'
                />
                <Box
                  className='film-title'
                  height='auto'
                  justifyContent='start'
                >
                  <Typography variant='h5'>
                    Here's Where You Know the Voice of 'Across the
                    Spider-Verse's George Stacy From
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md='6'>
            <Card
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <CardActionArea
                sx={{ height: "100%", width: "100%" }}
                component={Link}
                to='4'
              >
                <CardMedia
                  sx={{ objectFit: "cover", height: "100%", width: "100%" }}
                  component='img'
                  image='./assets/images/news4.avif'
                />
                <Box
                  className='film-title'
                  height='auto'
                  justifyContent='start'
                >
                  <Typography variant='h5'>
                    10 Movies With Similar Animation Styles to ‘Spider-Man:
                    Across the Spider-Verse’
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md='12'>
            <Card
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <CardActionArea
                sx={{ height: "100%", width: "100%" }}
                component={Link}
                to='5'
              >
                <CardMedia
                  sx={{ objectFit: "cover", height: "100%", width: "100%" }}
                  component='img'
                  image='./assets/images/news5.avif'
                />
                <Box
                  className='film-title'
                  height='auto'
                  justifyContent='start'
                >
                  <Typography variant='h5'>
                    Spider-Woman Actor Hailee Steinfeld Dresses Up As
                    Spider-Verse's Gwen Stacy
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default News;

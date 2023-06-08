import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container
      sx={{
        margin: "auto",
        minHeight: "80vh",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={{ xs: 2, sm: 4 }}
      >
        <Grid item xs={12} md={4} textAlign='center' flexGrow={2}>
          <Typography variant='h2'>Contact us</Typography>
          <Typography variant='body1'>
            Any question? Feel free to leave us a message
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: "1rem 2rem" }}>
            <CardHeader
              title='Get in touch!'
              subheader='Fill in the form and we will get back to you within 24 hours'
            />
            <CardContent>
              <form>
                <Grid container rowSpacing='1rem' columnSpacing='2.5rem'>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Your name'
                      variant='standard'
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      label='Favourite donut frosting?'
                      variant='standard'
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value=''>None</MenuItem>
                      <MenuItem value={1}>Vanilla</MenuItem>
                      <MenuItem value={2}>Chocolate</MenuItem>
                      <MenuItem value={3}>Pinkkk</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Email'
                      variant='standard'
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Phone number'
                      variant='standard'
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Write us a message'
                      variant='standard'
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size='medium'
                variant='contained'
                sx={{ textTransform: "none" }}
              >
                Send Message
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container>
      <Grid container spacing={1} sx={{ height: "100%" }}>
        <Grid item md={8} xs={12}>
          <Card>
            <CardHeader
              title='Contact us'
              subheader='Any question? Feel free to leave a message'
            />
            <CardContent sx={{ padding: "0 3rem" }}>
              <form>
                <Grid xs={12}>
                  <TextField
                    label='First name'
                    variant='standard'
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    label='Last name'
                    variant='standard'
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    label='Email'
                    variant='standard'
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    label='Phone number'
                    variant='standard'
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    label='Write us a message'
                    variant='standard'
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container md={4} xs={12}>
          <Grid item xs={12}>
            <Card>info</Card>
          </Grid>
          <Grid item xs={12}>
            <Card>random img</Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;

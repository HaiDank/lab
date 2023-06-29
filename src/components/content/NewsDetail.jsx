import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { NewsList } from "../../shared/ListOfNews";

function NewsDetail() {
  const userName = useParams();
  const newsItem = NewsList.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <Container>
      <Box position='relative' width='100%' mb={2}>
        <img
          src={`../${newsItem.img}`}
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </Box>
      <Box mb={2}>
        <Typography
          variant='h3'
          sx={{
            borderBottom: "2px solid transparent",
            borderImage:
              "linear-gradient(to right, transparent, mediumslateblue, transparent)",
            borderImageSlice: "1",
          }}
        >
          {newsItem.title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant='body1'>{newsItem.news}</Typography>
      </Box>
    </Container>
  );
}

export default NewsDetail;

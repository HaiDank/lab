import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WebIcon from "@mui/icons-material/Web";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function About() {
  return (
    <Container>
      <Stack
        textAlign='center'
        m='2rem'
        borderBottom='2px solid transparent'
        paddingBottom='1.2rem'
        sx={{
          borderImage:
            "linear-gradient(to right, transparent, mediumslateblue, transparent)",
          borderImageSlice: "1",
        }}
      >
        <Typography variant='h2'>About us</Typography>
        <Typography variant='body1'>Learn more about us</Typography>
      </Stack>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction='row' alignItems='center' gap={2}>
            <WebIcon fontSize='medium' />
            <Typography variant='h6'>What is this?</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a personal project for a course in a university in Vietnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} textAlign='center'>
          <Stack direction='row' alignItems='center' gap={2}>
            <PeopleIcon fontSize='medium' />
            <Typography variant='h6'>Who are we?</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am a student currently studying in said university.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction='row' alignItems='center' gap={2}>
            <FmdGoodIcon fontSize='medium' />
            <Typography variant='h6'>Where can you find us?</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Ho Chi Minh city Vietnam</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default About;

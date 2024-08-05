import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { FCard } from "./signorlogincard";
import { Link } from "react-router-dom";
import "./landing.css"
import { Typography } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function Landing() {
  return (
  <div className="s-landing">
    <Typography className="title1">
        LawyersUp
      </Typography>
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      
      <Grid container spacing={2} columns={{ xs: 2, sm: 6, md: 12 }} style={{opacity: 0.7}}>
        <Grid item xs={2} sm={3} md={6}>
          <Link to="/lawyerlogin" style={{ textDecoration: "none" }}>
            <Item>
              <FCard user="lawyer"></FCard>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={3} md={6}>
          <Link to="/clientlogin" style={{ textDecoration: "none" }}>
            <Item>
              <FCard user="client"></FCard>
            </Item>
          </Link>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

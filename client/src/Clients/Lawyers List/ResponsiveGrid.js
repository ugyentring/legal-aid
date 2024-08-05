import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MediaCard from "./Card";
import "./lawyerlist.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({posts}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 12 }}
      >
        {posts.map((post, index) => (
          <Grid item xs={2} sm={2} md={4} key={index}>
            <Item sx={{ m: 1, p: 2, my: 2 }}>
              <MediaCard posts={post} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

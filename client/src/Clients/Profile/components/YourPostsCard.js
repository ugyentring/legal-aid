import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";

export default function YourPostsCard(props) {
  const skillConvert = (str) => {
    if (!str) return [];
    str = str
      .trim()
      .split(/\s*,\s*/)
      .filter(Boolean);
    return str.map((skill) => skill.charAt(0).toUpperCase() + skill.slice(1));
  };

  const requestHandler = () => {
    alert("No requests on this post.");
  };

  const skills = skillConvert(props.details.skills);

  return (
    <Paper
      elevation={15}
      sx={{
        p: 2,
        margin: "10px",
        maxWidth: 800,
        minWidth: "30vw",
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12} container direction="column">
          <Grid item xs container spacing={1}>
            <Grid container style={{ marginLeft: "5px" }}>
              <Grid item xs={10} container direction="column">
                <Typography gutterBottom variant="subtitle1">
                  <span className="a-title">{props.details.title}</span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Chip
                  label={props.details.isPaid === "true" ? "Paid" : "Unpaid"}
                  color={
                    props.details.isPaid === "true" ? "warning" : "primary"
                  }
                  className="text-white"
                />
              </Grid>
            </Grid>
            <Grid container direction="row" style={{ marginLeft: "5px" }}>
              <Grid item xs={9}></Grid>
              <Grid item className="a-card-post-date">
                <Typography variant="caption" gutterBottom color="text.primary">
                  Posted on: 21st Feb, 2022
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              {props.details.isPaid === "true" && (
                <Grid item xs={12}>
                  <Typography variant="subtitle" sx={{ padding: "10px" }}>
                    <span className="a-secondary-title">Offer:</span>
                    <span style={{ marginLeft: "5px" }}>
                      ₹{props.details.amount}
                    </span>
                  </Typography>
                </Grid>
              )}
              <Grid item xs={3}>
                <Typography
                  sx={{ padding: "10px" }}
                  className="a-secondary-title"
                >
                  Skills:
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Box sx={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
                  {skills.length
                    ? skills.map((data, index) => (
                        <Chip key={index} label={data} sx={{ margin: "2px" }} />
                      ))
                    : "Not Provided"}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={4} md={3}>
                  <Typography
                    sx={{ padding: "10px" }}
                    className="a-secondary-title"
                  >
                    Description:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  {props.details.description}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <button className="btn btn-primary m-2">Details</button>
              </Typography>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <button
                  className="btn btn-primary m-2"
                  onClick={requestHandler}
                >
                  Requests
                </button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";

export default function YourPostsCard(props) {
  const skillConvert = (str) => {
    if (!str) return "";
    if (str.length == 0) {
      return [];
    } else {
      str = str.trim();
      str = str.split(" ").join("");
      str = str.split(",,").join();
      str = str.split(",");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i]?.charAt(0).toUpperCase() + str[i]?.slice(1);
      }
      return str;
    }
  };

  const requestHandler = () => {
    alert("No requests on this post.");
  };

  var skills = skillConvert(props.details.skills);

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
        <Grid item xs={12} sm container>
          <Grid item xs={12} sm={12} md={12} xs container direction="column">
            <Grid item xs container spacing={1}>
              <Grid container style={{ marginLeft: "5px" }}>
                <Grid
                  item
                  container
                  xs={10}
                  sm={10}
                  md={10}
                  direction="column"
                  // spacing={2}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{}}
                  >
                    <span className="a-title">{props.details.title}</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={1}>
                  {props.details.isPaid == "true" ? (
                    <Chip label="Paid" color="warning" className="text-white" />
                  ) : (
                    <Chip
                      label="Unpaid"
                      color="primary"
                      className="text-white"
                    />
                  )}
                </Grid>
                {/* <Grid item xs={6} sm={6} md={2}>
                  <Chip
                    avatar={
                      <Avatar alt="Anuj" src="/static/images/avatar/1.jpg" />
                    }
                    label="Avatar"
                    variant="outlined"
                  />
                </Grid> */}
              </Grid>
              <Grid container direction="row" style={{ marginLeft: "5px" }}>
                <Grid item xs={9} sm={9} md={9}>
                  {/* <Typography variant="body2" gutterBottom>
                    Organisation: National Institute of Tech, Patna
                  </Typography> */}
                </Grid>
                <Grid item className="a-card-post-date">
                  <Typography
                    variant="caption"
                    gutterBottom
                    color="text.primary"
                  >
                    Posted on: 21st Feb, 2022
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container>
                {props.details.isPaid == "true" ? (
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography
                      variant="subtitle"
                      style={({ fontSize: "15px" }, { padding: "10px" })}
                    >
                      <span className="a-secondary-title">Offer:</span>
                      <span style={{ marginLeft: "5px" }}>
                        {" "}
                        ₹{props.details.amount}
                      </span>
                    </Typography>
                  </Grid>
                ) : (
                  ""
                )}
                <Grid item xs={3} sm={3} md={3}>
                  <Typography
                    style={({ fontSize: "15px" }, { padding: "10px" })}
                    className="a-secondary-title"
                  >
                    Skills:
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                  <Box
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    {skills.length != 0
                      ? skills.map((data, index) => {
                          return data.length == 0 ? (
                            ""
                          ) : (
                            <Chip
                              key={index}
                              label={data}
                              sx={{ margin: "2px" }}
                            />
                          );
                        })
                      : "Not Provided"}
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <Grid container>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography
                      style={({ fontSize: "15px" }, { padding: "10px" })}
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
      </Grid>
    </Paper>
  );
}

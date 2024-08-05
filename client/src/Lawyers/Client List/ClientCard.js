import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // Updated to use react-router-dom for Link

export default function ClientMediaCard({ posts }) {
  console.log("hiii there");
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={posts.profilePic}
        title="Profile Picture"
      />
      <CardContent>
        <div className="card-category" style={{ display: "flex" }}>
          <Typography gutterBottom variant="h5" component="div">
            {posts.username}
          </Typography>
        </div>
        <div className="card-category" style={{ display: "flex" }}>
          <Typography
            gutterBottom
            component="div"
            margin="0px"
            textAlign="center"
          >
            {posts.username}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/client/${posts._id}`} style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-success btn-sm">
            Details
          </button>
        </Link>
      </CardActions>
    </Card>
  );
}

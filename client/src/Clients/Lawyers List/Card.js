import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@material-ui/core";

export default function MediaCard({ posts }) {
  console.log(posts);
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={posts.profilePic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {posts.username}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          margin="0px"
          textAlign="center"
        >
          {posts.username}
        </Typography>

        <div className="card-category" style={{ display: "flex" }}>
          <Typography
            gutterBottom
            component="div"
            margin="0px"
            textAlign="center"
          >
            {posts.categories}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/lawyers/${posts._id}`}>
          <button type="button" class="btn btn-success btn-sm">
            Details
          </button>
          {/* <Button size="small" sx = {{color: "Black", backgroundColor: "Green", "&:hover": {pointerEvents: "none"}}}>Details</Button> */}
        </Link>
      </CardActions>
    </Card>
  );
}

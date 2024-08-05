import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@material-ui/core";

export default function ClientMediaCard({ posts }) {
  console.log("hiii there");
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={posts.profilePic}
        title="green iguana"
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
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/client/${posts._id}`}>
          <button type="button" class="btn btn-success btn-sm">
            Details
          </button>
          {/* <Button size="small" sx = {{color: "Black", backgroundColor: "Green", "&:hover": {pointerEvents: "none"}}}>Details</Button> */}
        </Link>
      </CardActions>
    </Card>
  );
}

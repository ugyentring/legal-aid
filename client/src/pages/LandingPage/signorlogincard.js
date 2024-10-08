import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function FCard(props) {
  if (props.user === "lawyer") {
    return (
      <Card sx={{ width: 1, height: 1, opacity: 0.7 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lawyers
          </Typography>
          <Typography variant="body2" color="text.secondary" height="80px">
            Welcome Lawyers!! Happy to have you onboard.
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card sx={{ width: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Client
          </Typography>
          <Typography variant="body2" color="text.secondary" height="80px">
            Got a problem?? File a complaint. We have the best lawyers on board
            to help you.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

import * as React from "react";
import { Container } from "@material-ui/core";
import YourPostsCard from "./YourPostsCard";
import Header from "./Header";
import { CenterFocusStrong } from "@mui/icons-material";

function YourPosts() {
  var currPost = JSON.parse(localStorage.getItem("yourPosts"));
  return (
    <>
      <Container>
        <Header title="Your Posts" />
        <div className="a-center">
          {currPost ? (
            <YourPostsCard details={currPost} />
          ) : (
            <div className="a-center shadow">
              {" "}
              <div className="a-title mb-5">There are no posts to display</div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default YourPosts;

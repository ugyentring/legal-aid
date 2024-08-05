import React from "react";
import ResponsiveGrid from "./ResponsiveGrid";
import axios from "axios";
import { useLocation } from "react-router";

const LawyerList = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/lawyers" + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div style={{ overflowY: "scroll" }}>
      <ResponsiveGrid posts={posts} />
    </div>
  );
};

export default LawyerList;

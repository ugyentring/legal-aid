import React from "react";
import PrimarySearchAppBar from "../../Components/Search/Header";
import axios from "axios";
import { useLocation } from "react-router";
import ClientResponsiveGrid from "../../Lawyers/Client List/ClientResponsiveGrid";

const ClientList = () => {
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/client" + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div style={{ overflowY: "scroll" }}>
      {/* <PrimarySearchAppBar /> */}
      <ClientResponsiveGrid posts={posts} />
    </div>
  );
};

export default ClientList;

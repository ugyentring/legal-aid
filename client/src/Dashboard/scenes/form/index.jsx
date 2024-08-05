import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [posts, setPosts] = useState([]);

  const [data, setData] = useState({
    id: "",
    username: "",
    email: "",
    contact: "",
    lawyerid: "",
    access: "",
  });
  const handleTeamSubmit = async () => {
    console.log("rjf");
    const res = await axios.post("http://localhost:5000/api/team", {
      // id,
      // username,
      // email,
      // contact,
      // lawyerid,
      // access,
      ...data,
    });
    console.log(res);
    setPosts(res.data);
  };

  const handleTeamChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  return (
    <Box m="20px">
      <Header title="ADD LAWYER" subtitle="Enter Lawyer Details" />

      <form onSubmit={handleTeamSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Form Id"
            onChange={handleTeamChange}
            value={data.id}
            name="id"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="User Name"
            onChange={handleTeamChange}
            value={data.username}
            name="username"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onChange={handleTeamChange}
            value={data.email}
            name="email"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            onChange={handleTeamChange}
            value={data.contact}
            name="contact"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Lawyer Id"
            onChange={handleTeamChange}
            value={data.lawyerid}
            name="lawyerid"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Access Level"
            onChange={handleTeamChange}
            value={data.access}
            name="access"
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button
            onClick={handleTeamSubmit}
            type="submit"
            color="secondary"
            variant="contained"
          >
            Add Member
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;

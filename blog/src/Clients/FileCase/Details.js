import React, { useState } from "react";
import "./Details.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Context } from "../../context/Context";

import { useContext, useEffect} from "react";
const Details = () => {
  const { user } = useContext(Context);
  const { search } = useLocation();
  const [data, setData] = useState({
    casename: "",
    categories: "",
    documents: "",
    details: "",
    lawyers: search.substring(6),
    clients:user.username
  });
 
  const { query } = useLocation();
 console.log(search.substring(6));
 console.log(user._id);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(data);
    try {
      console.log(data);
      const res = await axios.post("http://localhost:5000/api/cases", {
        ...data,
      });
      res.data && window.location.replace("/lawyerlist");
    } catch (err) {}
  };
  return (
    <div className="S-case-details-form">
      <form className="S-caseForm" method="post" onSubmit={handleSubmit}>
        <h1 className="Form-Header">
          Case <span>Details</span>
        </h1>
        <input
          type="text"
          name="casename"
          id=""
          placeholder="Name"
          onChange={handleChange}
          value={data.casename}
        />
        <input
          type="text"
          name="categories"
          id=""
          placeholder="category"
          onChange={handleChange}
          value={data.categories}
        />
        <input
          type="file"
          name="documents"
          id=""
          placeholder="XXXXXXXXX"
          onChange={handleChange}
          value={data.phone}
          style={{ color: "Black" }}
        />
        <textarea
          name="details"
          id=""
          cols="30"
          rows="10"
          placeholder="Type Here"
          onChange={handleChange}
          value={data.details}
        />
        <button type="submit">submit</button>
        <p>
          {data.casename},{data.categories},{data.documents},{data.details}
        </p>
      </form>
    </div>
  );
};

export default Details;

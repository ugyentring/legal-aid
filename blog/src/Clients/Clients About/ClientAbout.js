import React from "react";

import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import personName from "img/person.jpg"

const ClientAbout = ({ posts }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  // const { user, dispatch } = useContext(Context);
  useEffect(() => {
    const getPost = async () => {
      console.log(path);
      const res = await axios.get("http://localhost:5000/api/client/" + path);
      //   console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <>
      <div className="about-container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="name"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{post.username}</h5>
                <p className="profile-rating mt-3 mb-5">
                  Cases: <span> 10 </span>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4"></div>

            {/* right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      {/* random numbers for now  */}
                      <p>{post._id}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Contact</label>
                    </div>
                    <div className="col-md-6">
                      {/* random numbers for now  */}
                      <p>{post.contact}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      {/* random numbers for now  */}
                      <p>{post.email}</p>
                    </div>
                  </div>

                  {/* <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Category</label>
                    </div>
                    <div className="col-md-6">
                      random numbers for now 
                      <p>{post.categories}</p>
                    </div>
                  </div> */}

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Gender</label>
                    </div>
                    <div className="col-md-6">
                      {/* random numbers for now  */}
                      <p>{post.gender}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Courts</label>
                    </div>
                    <div className="col-md-6">
                      {/* random numbers for now  */}
                      {/* <p>{post.court}</p> */}
                      <p>High Court</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{ width: "200px" }}
              class="btn btn-success btn-lg"
              role="button"
            >
              Reach out
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientAbout;

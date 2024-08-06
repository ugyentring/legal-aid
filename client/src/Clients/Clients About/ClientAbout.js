import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const ClientAbout = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/client/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };
    getPost();
  }, [path]);

  return (
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
          <div className="col-md-4"></div>

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
                    <p>{post._id}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Contact</label>
                  </div>
                  <div className="col-md-6">
                    <p>{post.contact}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{post.email}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-6">
                    <p>{post.gender}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Courts</label>
                  </div>
                  <div className="col-md-6">
                    <p>High Court</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <button
              style={{ width: "200px" }}
              className="btn btn-success btn-lg"
              type="button"
            >
              Reach out
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientAbout;

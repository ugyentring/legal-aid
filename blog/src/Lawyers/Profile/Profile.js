import * as React from "react";
import Button from "@mui/material/Button";
// import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";
import BeforeEditContent from "./components/BeforeEditContent";
import BeforeUneditableContent from "./components/BeforeUneditableContent";
import AfterEditContent from "./components/AfterEditContent";
import { useState } from "react";
import MyModal from "./components/MyModal";
import BeforeEditSkills from "./components/BeforeEditSkills";
import ImageHeader from "./components/ImageHeader";
import YourPosts from "./components/YourPosts";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
// import Login from "../accounts/Login";

function Profile(auth) {
  const [show, setShow] = useState({
    Username: true,
    FirstName: true,
    LastName: true,
    Email: true,
    Organisation: true,
    Skills: true,
    Description: true,
  });

  const [details, setDetails] = useState({
    username: "anujjadhav",
    firstName: "Anuj",
    lastName: "Jadhav",
    email: "anujjadhav0215@gmail.com",
    organisation: "National Institute of Technology, patna",
    skills: ["Angular", "React"],
    description:
      "Hardworking and a curious learner with appreciable knowledge mainly in programming including DSA, Web Development and Competitive Programming. Want to explore and learn more in the near future.",
    isStudent: null,
    password: "",
  });

  const allTrue = () => {
    setShow((previousState) => {
      return {
        ...previousState,
        Username: true,
        FirstName: true,
        LastName: true,
        Email: true,
        Organisation: true,
        Skills: true,
        Description: true,
      };
    });
  };

  const editUsername = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Username: false };
    });
  };
  const editFirstName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, FirstName: false };
    });
  };
  const editLastName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, LastName: false };
    });
  };
  const editOrganisation = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Organisation: false };
    });
  };
  const editSkills = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Skills: false };
    });
  };

  const editDescription = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Description: false };
    });
  };

  const skillConvert = (str) => {
    if (str.length == 0) {
      return [];
    } else {
      str = str.trim();
      str = str.split(" ").join("");
      str = str.split(",,").join();
      str = str.split(",");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i]?.charAt(0).toUpperCase() + str[i]?.slice(1);
      }
      return str;
    }
  };

  const handleInput = (e) => {
    if (e.target.name == "skills") {
      setDetails({
        ...details,
        [e.target.name]: skillConvert(e.target.value),
      });
    } else {
      setDetails({
        ...details,
        [e.target.name]: e.target.value,
      });
    }
  };

  const cancel = () => {
    allTrue();
  };

  const save = () => {
    allTrue();
    console.log(details);
  };

  const updatePassword = (passwordInput) => {
    setDetails({ ...details, password: passwordInput });
  };

  const allContent = [
    {
      toShow: show.Username,
      title: "Username",
      content: details.username,
      editButtonClick: editUsername,
      name: "username",
    },
    {
      toShow: show.FirstName,
      title: "First Name",
      content: details.firstName,
      editButtonClick: editFirstName,
      name: "firstName",
    },
    {
      toShow: show.LastName,
      title: "Last Name",
      content: details.lastName,
      editButtonClick: editLastName,
      name: "lastName",
    },
    {
      // uneditable
      toShow: show.Email,
      title: "Email",
      content: details.email,
      name: "email",
    },
    {
      toShow: show.Organisation,
      title: "Organisation",
      content: details.organisation,
      editButtonClick: editOrganisation,
      name: "organisation",
    },
    {
      toShow: show.Skills,
      title: "Skills",
      content: details.skills,
      editButtonClick: editSkills,
      name: "skills",
    },
    {
      toShow: show.Description,
      title: "Description",
      content: details.description,
      editButtonClick: editDescription,
      name: "description",
    },
  ];

  return (
    <>
      {/* <Navbar />
      <CssBaseline />
      <ImageHeader /> */}
      <section className="a-profile">
        <div className="a-center">
          <div className="a-edit-container shadow-lg rounded p-3 bg-white">
            <strong>
              <div className="a-title">Your Information</div>
            </strong>
            <div className="container">
              {allContent.map((data) => {
                return (
                  <div key="sdkjfh" className="a-row-content">
                    {data.toShow ? (
                      data.title == "Skills" ? (
                        <BeforeEditSkills
                          title="fgdfg"
                          content={["sgdgf"]}
                          editButtonClick="zdfd"
                        />
                      ) : data.title == "Email" ? (
                        <BeforeUneditableContent
                          title={data.title}
                          content="sgdgf"
                        />
                      ) : (
                        <BeforeEditContent
                          title="sldjnk"
                          content={["sgdgf"]}
                          editButtonClick={data.editButtonClick}
                        />
                      )
                    ) : (
                      <AfterEditContent
                        title="sdkjfh"
                        content="sgdgf"
                        saveClick={save}
                        cancelClick={cancel}
                        name="kajsbefjhb"
                        onChange={handleInput}
                      />
                    )}
                  </div>
                );
              })}
              <div className="row a-edit-content a-row-wrapper">
                <div className="col-lg-4 col-sm-12">
                  <MyModal
                    buttonName="Change Password"
                    details="jdknfn"
                    updatePassword={updatePassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <YourPosts /> */}
    </>
  );
}

export default Profile;

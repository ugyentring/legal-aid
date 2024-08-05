import "./ClientId.css";
import React, { useState, useRef, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Clientid() {
  const [username, setUsername] = useState("");
  const [prof, setProf] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [addhar, setAddhar] = useState("");
  const [categories, setCategories] = useState("");
  const [payment, setPayment] = useState("");
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const Fields = [
    ["Name", setUsername],
    ["Email", setEmail],
    ["Password", setPassword],
    ["Proffesion", setProf],
    ["Dob", setDob],
    ["Address", setAddress],
    ["Contact", setContact],
    ["Gender", setGender],
    ["Addhar", setAddhar],
  ];

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log(dispatch);
    console.log(isFetching);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/clientAuth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      res.data && window.location.replace("/lawyerlist");

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    handleClick();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/clientAuth/register",
        {
          username,
          email,
          password,
          prof,
          dob,
          address,
          contact,
          gender,
          addhar,
        }
      );
      res.data && window.location.replace("/lawyerlist");
    } catch (err) {
      setError(true);
    }
  };

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div>
      {/* <header className="header">
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <form action="#" className="search-bar">
          <input type="text" placeholder="Search.." />
          <button type="submit">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </header> */}

      <div className="background"></div>
      <div className="s-clientid-container">
        <div className="content">
          <h2 className="logo">
            <i className="bx bxs-hand"></i>LawyerUp
          </h2>
          <div className="text-sci">
            <h2>
              Welcome
              <br />
              <span>To a new way to approach</span>
            </h2>

            <p>
              We bring to you the one place to solve all your legal problems.
              Efficiently, swiftly and hassle free is our motto.
            </p>

            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={isActive ? "logreg-box active" : "logreg-box"}>
          <div className="form-box login">
            <form action="#">
              <h2>Sign In</h2>
              <div className="input-box">
                <span className="icon">
                  {/* <i className="bx bx-envelope"></i> */}
                </span>
                <input type="text" required ref={userRef} />
                <label>UserName</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  {/* <i className="bx bxs-lock-alt"></i> */}
                </span>
                <input type="password" required ref={passwordRef} />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                </label>
                <a href="#">Forget password?</a>
              </div>
              <button type="submit" className="btn" onClick={handleLoginSubmit}>
                Sign In
              </button>

              <div
                className="login-register"
                style={{ letterSpacing: "1.5px" }}
              >
                <p>
                  Don't have an account?
                  <a
                    href="#"
                    style={{ marginLeft: "1.5px" }}
                    className="login-link"
                    onClick={handleClick}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-box register">
            <form action="#">
              <h2>Sign Up</h2>
              <div className="fields">
                {Fields.map((item, index) => (
                  <div className="input-box">
                    <span className="icon">
                      {/* <i className="bx bx-envelope"></i> */}
                    </span>
                    <input
                      type="text"
                      required
                      onChange={(e) => item[1](e.target.value)}
                    />
                    <label>{item}</label>
                  </div>
                ))}
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox"></input>
                </label>
                <a href="#">Forget password?</a>
              </div>
              <button
                type="submit"
                className="btn"
                onClick={handleRegisterSubmit}
              >
                Sign Up
              </button>

              <div
                className="login-register"
                style={{ letterSpacing: "1.5px" }}
              >
                <p>
                  Already have an account?
                  <a
                    href="#"
                    style={{ marginLeft: "1.5px" }}
                    className="login-link"
                    onClick={handleClick}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientid;

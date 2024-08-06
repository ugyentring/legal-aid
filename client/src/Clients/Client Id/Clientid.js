import "./ClientId.css";
import React, { useState, useRef, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

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
  const { dispatch, isFetching } = useContext(Context);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
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
    setIsActive((current) => !current);
  };

  return (
    <div>
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
              <Link href="#">
                <i className="bx bxl-linkedin"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link href="#">
                <i className="bx bxl-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={isActive ? "logreg-box active" : "logreg-box"}>
          <div className="form-box login">
            <form onSubmit={handleLoginSubmit}>
              <h2>Sign In</h2>
              <div className="input-box">
                <input type="text" required ref={userRef} />
                <label>UserName</label>
              </div>

              <div className="input-box">
                <input type="password" required ref={passwordRef} />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="#">Forget password?</Link>
              </div>
              <button type="submit" className="btn">
                Sign In
              </button>

              <div
                className="login-register"
                style={{ letterSpacing: "1.5px" }}
              >
                <p>
                  Don't have an account?
                  <Link
                    to="#"
                    style={{ marginLeft: "1.5px" }}
                    className="login-link"
                    onClick={handleClick}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="form-box register">
            <form onSubmit={handleRegisterSubmit}>
              <h2>Sign Up</h2>
              <div className="fields">
                {Fields.map((item, index) => (
                  <div className="input-box" key={index}>
                    <input
                      type="text"
                      required
                      onChange={(e) => item[1](e.target.value)}
                    />
                    <label>{item[0]}</label>
                  </div>
                ))}
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="#">Forget password?</Link>
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>

              <div
                className="login-register"
                style={{ letterSpacing: "1.5px" }}
              >
                <p>
                  Already have an account?
                  <Link
                    to="#"
                    style={{ marginLeft: "1.5px" }}
                    className="login-link"
                    onClick={handleClick}
                  >
                    Sign in
                  </Link>
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

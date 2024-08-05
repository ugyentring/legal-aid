import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Clientregister() {
  const [username, setUsername] = useState("");
  const [prof, setProf] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [addhar, setaddhar] = useState("");
  const [categories, setCategories] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
   
      const res = await axios.post("http://localhost:5000/api/clientAuth/register", {
        username,
        email,
        password,
        prof,
        dob,
        address,
        contact,
        gender,
        addhar,
       
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className="register_card">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <label>Categories</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Category..."
          onChange={(e) => setCategories(e.target.value)}
        /> */}
        <label>Addhar</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Addhar..."
          onChange={(e) => setaddhar(e.target.value)}
        />
        <label>Contact</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Contact..."
          onChange={(e) => setContact(e.target.value)}
        />
        <label>Gender</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Gender..."
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
         <label>Profession</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Profession..."
          onChange={(e) => setProf(e.target.value)}
        />
         <label>DOB</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your DOB..."
          onChange={(e) => setDob(e.target.value)}
        />
         <label>Address</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Address..."
          onChange={(e) => setAdress(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
      </div>
    </div>
  );
}
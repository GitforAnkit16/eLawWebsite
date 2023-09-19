import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.css";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    state:"",
    isSeller: false,
    desc: "",
    category:"",
   

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="John Snow"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="India"
            onChange={handleChange}
          />
          <label htmlFor="">State</label>
          <input
            name="state"
            type="text"
            placeholder="Odisha"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a Service Provider</h1>
          <div className="toggle">
            <label htmlFor="">Activate the Service Provider account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Document Required</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button href="#">Documents???</button>
          <div className="docInfo"><p>If you are an advocate then upload your bar council and license, in case you want to apply as a document writer,mediator or expert provide necessary info for your background check</p></div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+91 99999 99999"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Profession  </label>
          <select name="Profession" id="prof">
            <option value="Lawyer">Lawyer</option>
            <option value="Arbitrator">Arbitrator</option>
            <option value="DocumentWriter">DocumentWriter</option>
            <option value="Notary">Notary</option>
            <option value="Expert">Expert</option>
          </select>
          <br />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        
      </form>
      
    </div>
  );
}

export default Register;
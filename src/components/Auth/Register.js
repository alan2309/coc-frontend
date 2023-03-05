import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import axiosInstance from "../../axiosInstance";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [intrestData, setIntrestData] = useState([
    "sports",
    "music",
    "coding",
    "gym",
    "writing",
    "reading",
    "travelling",
  ]);
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    interests: ["gym", "writing", "reading"],
    confirmPassword: "",
  });

  useEffect(() => { }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(values);
    const { data } = await axiosInstance.post("/register/", { data: values });
    console.log(data);
    const data1 = await axios.post("http://localhost:5000/api/auth/register", {
      username: values.username,
      email: values.email,
      password: values.password,
    });

    if (data.data === "Success" && data1.data.status === true) {
      navigate("/login");
    } else {
      if (data1.data.status === false) {
        console.log(data.msg);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand d-flex flex-column">
            {/*<img src={Logo} alt="logo" />*/}
            <h1 className="fw-bold">Tripling<i class="fa-solid fa-mountain-sun"></i></h1>
            <h3 className="fw-bold" style={{ color: "#FFFFFF" }}>Register</h3>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Profile Img"
            name="profile_img"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="City"
            name="home"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Phone number"
            name="phone"
            onChange={(e) => handleChange(e)}
          />
          <div className="d-flex justify-content-between align-items-center gap-3">
            {intrestData.map((obj, ind) => {
              return (
                <>
                  <div className="">
                    <button
                      onClick={(e) => {
                        let ob = intrestData;
                        let index = ob.indexOf(obj);
                        ob.splice(index, 1);
                        //console.log(intrestData)
                        console.log(ob);
                        setIntrestData(ob);
                      }}
                    >
                      {obj}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login" style={{ color: '#FFFFFF' }}>Login.</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  padding-top: 3rem;  
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #333333;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #FFFFFF;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #FFFFFF;
      outline: none;
    }
  }
  button {
    background-color: #FFFFFF;
    color: #333333;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #FFFFFF;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

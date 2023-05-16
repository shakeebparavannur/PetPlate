import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

const SignUp = () => {
  const [error, setError] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate()

  const Validate = async (data) => {
    const errors = {};
    if (!data.username) {
      errors.username = "username is a required field";
    } else if (data.username.length <= 3) {
      errors.username = "username must be at least 4 characters";
    } else  {
      try {
        const response = await axios.get(`http://localhost:3000/user`);
        const userData = response.data;
        const uniqueUser = userData.map((user) => user.username);
        const uniqueEmail = userData.map((user) => user.email);
        const uniquePhone = userData.map((user) => user.phone);
        if (uniqueUser.includes(data.username)) {
          errors.username = "username already exists";
        }
        else if (uniqueEmail.includes(data.email)){
          errors.email = "email already exists";
        }
        else if (uniquePhone.includes(data.phone)){
          errors.phone = "phone already exists";
        }
      } catch (error) {
        errors.message = "Error fetching userdatas" + error;
      }
    }


    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userData = Object.fromEntries(formData.entries());
    const newErrors = await Validate(userData);
    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:3000/user", userData)
        .then((response) => {
          console.log(response.data);
          formRef.current.reset()
          navigate('/login')
        })
        .catch((err) => {
          console.log(err);
        });   
    }
    
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="username" placeholder="enter the username" />
        {error.username && <span className="">{error.username}</span>} <br />
        <input type="text" name="fullname" placeholder="enter your full name" />
        {error.fullname && <span className="">{error.fullname}</span>} <br />
        <input
          type="tel"
          name="phone"
          maxLength={10}
          minLength={10}
          placeholder="enter your phone number"
        />
        {error.phone && <span className="">{error.phone}</span>} <br />
        <input type="email" name="email" placeholder="enter the email" />
        <input
          type="password"
          name="password"
          placeholder="enter the password"
        />
        {error.email && <span className="">{error.email}</span>} <br />
        <input type="password" placeholder="confirm the password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;

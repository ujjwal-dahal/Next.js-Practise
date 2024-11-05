"use client";

import axios from "axios";
import { useState } from "react";

const Form = () => {
  const userData = {
    name: "",
    email: "",
    number: "",
    password: "",
  };
  const [formData, setFormData] = useState(userData);

  const handleChange = (event) => {
    setFormData((prevData) => {
      let updatedData = {
        ...prevData,
        [event.target.name]: event.target.value,
      };

      return updatedData;
    });
  };

  const formHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      let url = "http://localhost:3001/api/user";

      let response = await axios.post(url, formData);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        number: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form action="" onSubmit={formHandler}>
        <div className="">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Enter Phone Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./updateData.scss"

const UpdateData = ({ params }) => {
  const router = useRouter();
  const { updateData } = params; // Assuming params has the correct shape
  const userId = updateData; // Ensure this is the ID you're expecting

  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  // Fetch user data based on ID when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}`);
        setUpdatedData(response.data.data); // Make sure response.data is structured correctly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/user/${userId}`, updatedData);
      console.log("Data updated successfully");
      router.push("/form-data"); // Redirect back to data list page
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <h1>Update Data</h1>
      <form onSubmit={updateHandler}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={updatedData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={updatedData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Phone Number"
            name="number"
            value={updatedData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={updatedData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateData;

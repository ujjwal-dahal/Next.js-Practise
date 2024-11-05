"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import "./formData.scss";
import { useRouter } from "next/navigation";

export default function FormData() {
  const router = useRouter();
  const [apiData, setApiData] = useState([]);

  const url = "http://localhost:3001/api/user";

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setApiData(response.data.data);
      console.log("Data Retrieved Successfully");
    } catch (error) {
      console.log(error.message);
      setApiData([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (userId) => {
    try {
      await axios.delete(url, { data: { id: userId } });
      // Option 1: Refetch data after deletion
      getData(); // Refetch to update the user list

      // Option 2: Alternatively, filter the deleted user from the current state
      // setApiData(apiData.filter(item => item.id !== userId));

      console.log("Data Deleted Successfully");
    } catch (error) {
      console.log("Error deleting data:", error.message);
    }
  };

  const updateData = (userId)=>{
    router.push(`/form-data/${userId}`)


  }

  return (
    <div className="main-container">
      {apiData.map((item) => (
        <div className="container" key={item.id}>
          <p>Name : {item.name}</p>
          <p>Email : {item.email}</p>
          <p>Phone : {item.number}</p>
          <p>Password : {item.password}</p>
          <button onClick={() => deleteData(item.id)} className="btn delete-btn">Delete</button>
          <button onClick={() => updateData(item.id)} className="btn update-btn">Update</button>
        </div>
      ))}
    </div>
  );
}

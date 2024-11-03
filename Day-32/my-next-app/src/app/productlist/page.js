"use client";

import { useEffect, useState } from "react";
import "./page.scss"

export default function ProductList() {
  let url = "https://dummyjson.com/products/";
  const [apiData, setApiData] = useState([]);

  let productJson = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setApiData(data.products);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productJson();
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <div className="main-container" >
      {apiData.map((item) => {
        return (
          <div className="container" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.category}</p>
          </div>
        );
      })}
      </div>
    </>
  );
}

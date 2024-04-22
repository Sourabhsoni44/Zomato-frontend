
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./Addproduct.css";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl='https://oglkquhkdivgiqupurew.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGtxdWhrZGl2Z2lxdXB1cmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTM2MzEsImV4cCI6MjAyNjU4OTYzMX0._YrRgbSyZkTLDjNHAkGc3yU4Y_eAAvF2SnutSr5AdF8'
const supabase = createClient(supabaseUrl, supabaseKey);

const Addproduct = () => {
    let {restroId}=useParams()

  const [products, setProducts] = useState([]);

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    descriptions: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage
        .from("zomato")
        .upload(
          "product_images/" + restaurantData.image.name,
          restaurantData.image
        );

      if (error) {
        console.error("Error uploading image to Supabase:", error);
        throw error;
      }

      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${restaurantData.image.name}`;

      const response = await axios.post("http://localhost:7000/product", {
        ...restaurantData,
        image: imageUrl,
        restroId
      });
      if (response.status === 200) {
        alert("Product added successfully");
        // Reset form fields
        setRestaurantData({
          name: "",
          descriptions: "",
          price: "",
          image: "",
        });
      } else {
        console.error(
          "Failed to add product. Response status:",
          response.status
        );
        alert("product added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h1>Add Product</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={restaurantData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descriptions">Description:</label>
          <input
            id="descriptions"
            name="descriptions"
            value={restaurantData.descriptions}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={restaurantData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Addproduct;


import React, { useState } from "react";
import axios from 'axios';
import "./AddRestaurant.css"; 
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = ' https://oglkquhkdivgiqupurew.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGtxdWhrZGl2Z2lxdXB1cmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTM2MzEsImV4cCI6MjAyNjU4OTYzMX0._YrRgbSyZkTLDjNHAkGc3yU4Y_eAAvF2SnutSr5AdF8'
const supabase = createClient(supabaseUrl, supabaseKey);



const AddRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    address: '',
    description: '',
    image: '',
    contactNo: '',
    openingTime: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };



  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Upload image to Supabase
    const { data, error } = await supabase.storage
      .from('zomato')
      .upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);

    if (error) {
      console.error('Error uploading image to Supabase:', error);
      throw error;
    }


    const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/restaurant_images/${restaurantData.image.name}`;

    const response = await axios.post('http://localhost:7000/restro', { ...restaurantData, image: imageUrl });
    if (response.status === 200) {
      alert('Restaurant added successfully');
      // Reset form fields
      setRestaurantData({
        name: '',
        address: '',
        description: '',
        image: '',
        contactNo: '',
        openingTime: ''
      });
    } else {
      console.error('Failed to add restaurant. Response status:', response.status);
      alert('Restaurant added Successfully');
    }
  } catch (error) {
    console.error('Error adding restaurant:', error);
    alert('Failed to add restaurant');
  }
};

  return (


<div className="addrestaurant">
        <h1>Addrestaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="name"
            value={restaurantData.name}
            onChange={handleChange}
            placeholder="Business Name"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="address"
            value={restaurantData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="input-container">
          <input
            name="description"
            value={restaurantData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="input-container">
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            placeholder="image"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="contactNo"
            value={restaurantData.contactNo}
            onChange={handleChange}
            placeholder="Contact Number"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="openingTime"
            value={restaurantData.openingTime}
            onChange={handleChange}
            placeholder="Opening Time"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>

  );
};

export default AddRestaurant;






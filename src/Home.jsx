import React, { useState, useEffect } from "react";
import zomato from "./images/zomato.avif";
import "./Home.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Cards from "./HomePageComponent/Cards";
import Collections from "./HomePageComponent/Collections";
import Footer from "./HomePageComponent/Footer";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Cities from "./HomePageComponent/Cities";
import GetApp from "./HomePageComponent/GetApp";
import Explore from "./HomePageComponent/Explore";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem("user");
    console.log(data, "dataaaaaaaa");
    let newData = JSON.parse(data);
    console.log(newData, "newData");

    setData(newData);
  }, []);

  let remove = () => {
    localStorage.clear("user");
    setData(null);
  };
  return (
    <>
      <div className="parent">
        <img id="bg" src={zomato} />

        <div className="navbar">
          <div className="navbar-left">
            <span className="resto">
              {" "}
              <Link className="white" to="/AddRestaurant">
                Addrestaurant
              </Link>
            </span>
            <span className="resto">
              {" "}
              <Link className="white" to="/View">
                View Foods
              </Link>
            </span>
          </div>

          <div className="navbar-right">
            {data && data.user ? (
              <>
                <p>{data.user.name}</p>
                <span onClick={remove} className="floar-right2">
                  <NavLink className="white">Logout</NavLink> <BiLogInCircle />
                </span>
              </>
            ) : (
              <>
                <span className="floar-right1">
                  <FaUserAlt />{" "}
                  <NavLink to="/signup" className="white">
                    Sign-up
                  </NavLink>{" "}
                </span>
                <span className="floar-right2">
                  {" "}
                  <NavLink to="/login" className="white">
                    Login
                  </NavLink>{" "}
                  <BiLogInCircle />{" "}
                </span>{" "}
              </>
            )}
          </div>

          <div className="input">
            <img
              id="logo"
              alt="Zomato logo"
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              loading="lazy"
              class="sc-s1isp7-5 jQwYOW"
            ></img>
          </div>
          <div className="title">
            <h1>Discover the best food and drink in bhopal</h1>

            <div className="holder">
              <div className="immageserachbox">
                <LocationOnIcon id="locationicon" />
                <select className="option34">
                  <option>Bhopal</option>
                  <option>jhansi</option>
                  <option>Indor</option>
                  <option>Delhi</option>
                  <option>Lucknow</option>
                </select>
                <MoreVertIcon id="lineicon" />
                <SearchIcon id="searchicon" />{" "}
                <input
                  id="fieldss"
                  name="data"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        <Cards />
        <Collections />
        <Cities/>
        <GetApp/>
        <Explore/>
        <Footer />
       
       

       
      </div>
    </>
  );
};

export default Home;

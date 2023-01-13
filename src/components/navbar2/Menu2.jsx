import React from "react";
import Styles from "./_navbar2.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import {RiArrowDropDownLine} from 'react-icons/ri';
import { BsThreeDots } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiLayers } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";

const Menu2 = () => {
  return (
    <section id={Styles.nav1}>
      <article className={Styles.nav}>
        <div>
          <a href="">
            <img
              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg"
              alt="Geeks"
              className={Styles.geeksImg}
            />
          </a>
        </div>
        <div className={Styles.Menu}>
          <ul>
            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>
                Browse <RiArrowDropDownLine />
              </span>
              <div class={Styles.dropdownContent}>
                <a href="#">
                  Web Development 
                  <RiArrowRightSLine />
                </a>
                <a href="#">
                  Design <RiArrowRightSLine />
                </a>
                <a href="#">Mobile App</a>
                <a href="#">IT Software</a>
                <a href="#">Marking</a>
                <a href="#">Music</a>
                <a href="#">Lifestyle</a>
                <a href="#">Business</a>
                <a href="#">Photography</a>
              </div>
            </li>
            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>Landings</span>
              <RiArrowDropDownLine />
              <div class={Styles.dropdownContent}>
                <a href="#">Courses</a>
                <a href="#">Lead Course</a>
                <a href="#">Request Access</a>
                <a href="#">SaaS</a>
                <a href="#">
                  Home Academy <button id={Styles.newBtn}>New</button>
                </a>
              </div>
            </li>
            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>Pages</span>
              <RiArrowDropDownLine />
              <div class={Styles.dropdownContent}>
                <a href="#">Courses</a>
                <a href="#">Paths</a>
                <a href="#">Blog</a>
                <a href="#">Career</a>
                <hr />
                <a href="#">Speciality</a>
                <a href="#">About</a>
                <a href="#">Help Center</a>
                <a href="#">Pricing</a>
              </div>
            </li>

            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>Accounts</span>
              <RiArrowDropDownLine />
              <div class={Styles.dropdownContent}>
                <a href="#">Instructor</a>
                <a href="#">Student</a>
                <a href="#">Admin</a>
                <hr />
                <a href="#">Sign In</a>
                <a href="#">Sign Up</a>
                <a href="#">Lost Password</a>
                <a href="#">Edit Profile</a>
                <a href="#">Security</a>
                <a href="#">Account Details</a>
              </div>
            </li>

            <li className={Styles.dropdown}>
              <span>
                <BsThreeDots /> <RiArrowDropDownLine />
              </span>
              <div class={Styles.dropdownContent}>
                <a href="#">
                  <CgFileDocument /> Documentation
                  <br />
                  Browse the full documentation
                </a>
                <a href="#">
                  <FiLayers /> Changelog
                  <span className={Styles.version}>v2.21</span>
                  <br />
                  See what's new
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className={Styles.searchBar}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 250,
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Courses" />
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <CiSearch />
            </IconButton>
          </Paper>
        </div>
      </article>
    </section>
  );
};

export default Menu2;

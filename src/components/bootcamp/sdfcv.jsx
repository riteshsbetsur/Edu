import React, { useState } from "react";
import axios from "axios";
import Styles from "./_bootcamp.module.css";
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const CreateBootCamp1 = () => {
  let [state, setState] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    address: "",
    careers: "",
  });
  let { name, description, website, email, address, careers } = state;

  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      // let payload = {
      //   name: "javascript bootcamp",
      //   description:
      //     "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
      //   website: "https://developer.mozilla.org/en-US/",
      //   email: "shashikunal@gmail.com",
      //   address: "pnb layout ",
      //   careers: "web development",

      // }
      let payload = state;
      let token = window.localStorage.getItem("token");
      let { data } = await axios.post(
        "http://localhost:5000/api/v1/bootcamps",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {}
  };

  return (
    <section id={Styles.mainBlock11}>
      <article id={Styles.articleBlock11}>
        <span>
          <img
            src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
            alt=""
            className={Styles.avatar1}
          />
          <h1>
            Create
            <br />
            BootCamp
          </h1>
        </span>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formGroup}>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter the name"
            />
          </div>
          <div className={Styles.formGroup}>
            {/* <label htmlFor="description">Description</label> */}
            <textarea
              name="description"
              id="description"
              cols="31"
              rows="5"
              value={description}
              onChange={handleChange}
              placeholder="Enter the description..."
            ></textarea>
          </div>
          <div className={Styles.formGroup}>
            {/* <label htmlFor="website">Website</label> */}
            <input
              type="text"
              name="website"
              id="website"
              value={website}
              onChange={handleChange}
              placeholder="Enter the website"
            />
          </div>
          <div className={Styles.formGroup}>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter the email"
            />
          </div>
          <div className={Styles.formGroup}>
            {/* <label htmlFor="address">Address</label> */}
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter the address"
            />
          </div>

          <div
            className={Styles.formGroup}
            onChange={handleChange}
            name="careers"
            value={careers}
          >
            {/* <label htmlFor="careers">Careers</label> */}
            <select name="careers" id="careers" className={Styles.careersOpt}>
              <option value="web development">Web Development</option>
              <option value="react development">React Development</option>
              <option value="fullstack development">
                Fullstack Development
              </option>
              <option value="java development">Java Development</option>
              <option value="python development">Python Development</option>
              <option value="android development">Android Development</option>
              <option value="ux/ui development">UX/UI Development</option>
              <option value="business">Business</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className={Styles.formGroup}>
            <button id={Styles.btn11}>Submit</button>
          </div>
        </form>
        <div>
          <button className={Styles.cancelBtn1}>
            <Link to="/" className={Styles.signin}>
              <RxCross2 />
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
};

export default CreateBootCamp1;
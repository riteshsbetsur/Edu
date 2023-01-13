import React from "react";
import Styles from "./_signUp.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import AxiosInstance from "./AxiosInstance";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {RxCross2} from 'react-icons/rx'

const SignIn = () => {
  let Navigate = useNavigate();
  let [users, setUsers] = useState({
    email: "",
    password: "",
  });

  let { email, password } = users;

  let handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = {
        email,
        password,
      };
      console.log(payload);
      let { data } = await AxiosInstance.post("/auth/login", payload);
      toast.success(`successfully ${email} added`);
      if (data.success === true) {
        window.localStorage.setItem("token", data.token);
      } else {
        window.localStorage.removeItem("token", data.token);
      }
      Navigate("/");
    } catch (error) {
      toast.error("Enter valid email/password");
    }
  };

  return (
    <section id={Styles.mainBlock2}>
      <article id={Styles.articleBlock2}>
        <span>
          <img
            src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
            alt=""
            className={Styles.avatar1}
          />
          <h1>Sign In</h1>
        </span>
        <p className={Styles.already1}>
          Don't have an account?_
          <Link to="/signup" className={Styles.alreadyAcc}>
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <p className={Styles.already}>
            <Link to="/signup" className={Styles.alreadyAcc}>
              Forgot Password?
            </Link>
          </p>
          <br />
          <br />
          <div>
            <button id={Styles.btn}>Login</button>
          </div>
        </form>
        <button>
          <Link to="/" className={Styles.bootcampBtn22}>
            <RxCross2 />
          </Link>
        </button>
      </article>
    </section>
  );
};

export default SignIn;

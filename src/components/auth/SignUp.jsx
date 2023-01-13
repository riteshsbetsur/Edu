import React from "react";
import Styles from "./_signUp.module.css"
import { useState } from "react";
import { toast } from "react-toastify";
import AxiosInstance from './AxiosInstance';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  let Navigate=useNavigate()
  let [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  let { name, email, password, passwordConfirmation } =
    users;

  let handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      if(password===passwordConfirmation){
        let payload = {
          name,
          email,
          password,
          passwordConfirmation,
        };
        console.log(payload);
        await AxiosInstance.post("/auth/register", payload);
        toast.success(`successfully ${name} added`);
        Navigate("/signin")
      }
      else {
        toast.error("Password not matched");
      }
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <section id={Styles.mainBlock1}>
      <article id={Styles.articleBlock1}>
        <span>
          <img
            src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
            alt="" className={Styles.avatar1}
          />
          <h1>Sign Up</h1>
        </span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </div>

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

          <div>
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handleChange}
            />
          </div>

          <p className={Styles.already}>
            Already have an account?
            <Link to="/signin" className={Styles.alreadyAcc}>
              Sign In
            </Link>
          </p>
          <br />
          <br />
          <div>
            <button id={Styles.btn}>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignUp;

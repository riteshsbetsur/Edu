import React from 'react';
import Styles from './_navbar2.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiUserGroup } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import {Link} from 'react-router-dom';


const Menu1 = () => {
  return (
    <section>
      <article>
        <div className={Styles.Menu}>
          <ul>
            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>
                Courses &nbsp; <AiOutlinePlus />
              </span>
              <div class={Styles.dropdownContent}>
                <a href="#">Courses</a>
                <a href="#">Course Details</a>
                <a href="#"> Course View </a>
              </div>
            </li>
            <li className={Styles.dropdown}>
              <span className={Styles.droptbtn}>Blog &nbsp;</span>
              <AiOutlinePlus />
              <div class={Styles.dropdownContent}>
                <a href="#">Blog Grid</a>
                <a href="#">Blog style2</a>
                <a href="#">Blog style3</a>
                <a href="#">Blog Single</a>
              </div>
            </li>
            <li className={Styles.dropdown}>
              <span>Pages &nbsp;</span>
              <AiOutlinePlus />
              <div class={Styles.dropdownContent}>
                <a href="#"> About</a>
                <a href="#">Team</a>
                <a href="#">Instructor</a>
                <a href="#">Shope Page</a>
                <a href="#">Shope Details Page </a>
                <a href="#">Shope Cart Page</a>
                <a href="#">Search Page</a>
                <a href="#">Search None</a>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Menu1
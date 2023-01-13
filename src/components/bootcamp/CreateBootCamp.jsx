import React from "react";
import axios from "axios";

const CreateBootCamp = () => {
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = {
        name: "javascript bootcamp",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
        website: "https://developer.mozilla.org/en-US/",
        email: "shashikunal@gmail.com",
        address: "pnb layout ",
        careers: "web development",
      };
      // let token = window.localStorage.getItem("token");
      let { data } = await axios.post(
        "http://localhost:5000/api/v1/bootcamps",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVkMWUyM2Y0Njg0ZGU2NTdjOTc0MSIsImlhdCI6MTY3MjQwMjMyNiwiZXhwIjoxNjcyNDQ1NTI2fQ.aa-ASfI_491ik8enG6hlDO5ol0mmo_gD3vNpXfI8ego`,
          },
        }
      );
    } catch (error) {}
  };

  return <div>CreateBootCamp</div>;
};

export default CreateBootCamp;

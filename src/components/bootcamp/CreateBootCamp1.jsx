// import React, { useState } from "react";
// import axios from "axios";
// import Styles from "./_bootcamp.module.css";
// import { RxCross2 } from 'react-icons/rx';
// import { Link } from "react-router-dom";

// const CreateBootCamp1 = () => {
//   let [state, setState] = useState({
//     name: "",
//     description: "",
//     website: "",
//     email: "",
//     address: "",
//     careers: "",
//   });
//   let { name, description, website, email, address, careers } = state;

//   let handleChange = e => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   let handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       // let payload = {
//       //   name: "javascript bootcamp",
//       //   description:
//       //     "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
//       //   website: "https://developer.mozilla.org/en-US/",
//       //   email: "shashikunal@gmail.com",
//       //   address: "pnb layout ",
//       //   careers: "web development",

//       // }
//       let payload = state;
//       let token = window.localStorage.getItem("token");
//       let { data } = await axios.post(
//         "http://localhost:5000/api/v1/bootcamps",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(data);
//     } catch (error) {}
//   };

//   return (
//     <section id={Styles.mainBlock11}>
//       <article id={Styles.articleBlock11}>
//         <span>
//           <img
//             src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
//             alt=""
//             className={Styles.avatar1}
//           />
//           <h1>
//             Create
//             <br />
//             BootCamp
//           </h1>
//         </span>
//         <form onSubmit={handleSubmit}>
//           <div className={Styles.formGroup}>
//             {/* <label htmlFor="name">Name</label> */}
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={name}
//               onChange={handleChange}
//               placeholder="Enter the name"
//             />
//           </div>
//           <div className={Styles.formGroup}>
//             {/* <label htmlFor="description">Description</label> */}
//             <textarea
//               name="description"
//               id="description"
//               cols="31"
//               rows="5"
//               value={description}
//               onChange={handleChange}
//               placeholder="Enter the description..."
//             ></textarea>
//           </div>
//           <div className={Styles.formGroup}>
//             {/* <label htmlFor="website">Website</label> */}
//             <input
//               type="text"
//               name="website"
//               id="website"
//               value={website}
//               onChange={handleChange}
//               placeholder="Enter the website"
//             />
//           </div>
//           <div className={Styles.formGroup}>
//             {/* <label htmlFor="email">Email</label> */}
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={handleChange}
//               placeholder="Enter the email"
//             />
//           </div>
//           <div className={Styles.formGroup}>
//             {/* <label htmlFor="address">Address</label> */}
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={address}
//               onChange={handleChange}
//               placeholder="Enter the address"
//             />
//           </div>

//           <div
//             className={Styles.formGroup}
//             onChange={handleChange}
//             name="careers"
//             value={careers}
//           >
//             {/* <label htmlFor="careers">Careers</label> */}
//             <select name="careers" id="careers" className={Styles.careersOpt}>
//               <option value="web development">Web Development</option>
//               <option value="react development">React Development</option>
//               <option value="fullstack development">
//                 Fullstack Development
//               </option>
//               <option value="java development">Java Development</option>
//               <option value="python development">Python Development</option>
//               <option value="android development">Android Development</option>
//               <option value="ux/ui development">UX/UI Development</option>
//               <option value="business">Business</option>
//               <option value="others">Others</option>
//             </select>
//           </div>
//           <div className={Styles.formGroup}>
//             <button id={Styles.btn11}>Submit</button>
//           </div>
//         </form>
//         <div>
//           <button className={Styles.cancelBtn1}>
//             <Link to="/" className={Styles.signin}>
//               <RxCross2 />
//             </Link>
//           </button>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default CreateBootCamp1;

//!=============================================================================================

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Styles from "./_bootcamp.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { toast } from "react-toastify";

const CreateBootCamp1 = () => {
  let [state1, setState1] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    address: "",
    careers: "",
  });
  let { name, description, website, email, address, careers } = state1;

  let handleChange = e => {
    let { name, value } = e.target;

    setState1({ ...state1, [name]: value });
  };

  // let handleSubmit = e => {
  //   e.preventDefault();
  //   let payload = ;
  //   console.log(payload);
  // };
  // console.log(state)
  // const [career, setCareer] = React.useState("");

  // const handleChange1 = event => {
  //   setCareer(event.target.value);
  // };
  //!======================

  // !=======================
  let handleSubmit = e => {
    e.preventDefault();
    try {
      let payload = { name, description, website, email, address,careers };
      console.log(payload);
      let token = window.localStorage.getItem("token");
      let fetchData = async () => {
        let { data } = await axios.post(
          "http://localhost:5000/api/v1/bootcamps",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      };
      fetchData();
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <section id={Styles.bootMain}>
      <span>
        {/* <img
          src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg"
          alt=""
          className={Styles.avatar11}
        /> */}
        <BiMessageSquareAdd style={{ fontSize: "50px", color: "grey" }} />
        <h2 className={Styles.bc}>Create BootCamp</h2>
      </span>

      <article id={Styles.bootSubMain}>
        {/* <form> */}
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          // noValidate
          // autoComplete="off"
        >
          <div>
            <TextField
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              id="outlined-Name-input"
              label="Name"
              required
            />
            <TextField
              type="email"
              name="email"
              onChange={handleChange}
              id="outlined-website-input"
              label="Email"
              value={email}
              style={{ width: "300px" }}
              required
            />
            <TextField
              type="text"
              name="website"
              onChange={handleChange}
              id="outlined-website-input"
              label="Website url"
              value={website}
              style={{ width: "600px" }}
              // defaultValue="http://"
              helperText="Example: http://www.google.com"
            />

            <FormControl
              sx={{ m: 1, minWidth: 300 }}
              onChange={handleChange}
              value={careers}
              name="careers"
            >
              <InputLabel
                id="demo-simple-select-autowidth-label"
                name="careers"
              >
                Select Career
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                // id="demo-simple-select-autowidth"
                name="careers"
                autoWidth
                label="Select Career"
              >
                <MenuItem value="careers">
                  <em>Career</em>
                </MenuItem>
                <MenuItem value="web development">Web Development</MenuItem>
                <MenuItem value="react development">React Development</MenuItem>
                <MenuItem value="fullstack development">
                  Fullstack Development
                </MenuItem>
                <MenuItem value="java development">Java Development</MenuItem>
                <MenuItem value="python development">
                  Python Development
                </MenuItem>
                <MenuItem value="android development">
                  Android Development
                </MenuItem>
                <MenuItem value="ux/ui development">UX/UI Development</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-address-input"
              label="Address"
              name="address"
              type="text"
              value={address}
              onChange={handleChange}
              rows={1}
              multiline
              style={{ width: "815px" }}
            />
          </div>
          <TextField
            id="outlined-description-input"
            label="Description"
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
            rows={3}
            multiline
            style={{ width: "1130px" }}
          />
          <div className={Styles.createBtn}>
            <div className={Styles.createBtn1}>
              <Button variant="outlined">
                <Link to="/" className={Styles.bootcampBtn}>
                  Cancel
                </Link>
              </Button>
            </div>

            <div className={Styles.createBtn2}>
              <button className={Styles.createBtn12} type="submit">
                Create
              </button>
              {/* <Button variant="contained">Create</Button> */}
            </div>
          </div>
        </Box>
        {/* </form> */}
      </article>
    </section>
  );
};

export default CreateBootCamp1;

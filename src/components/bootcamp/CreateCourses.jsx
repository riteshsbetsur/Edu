import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import AxiosInstance from "../auth/AxiosInstance";
import Styles from "./_bootcamp.module.css";
import TextField from "@mui/material/TextField";
import { MdAddToQueue } from "react-icons/md";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const CreateCourses = () => {
  //   let formRef = useRef();
  //   let [photo, setPhoto] = useState({
  //     photo: null,
  //   });
  let [state, setState] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: "",
    scholarshipAvailable: "",
  });
  let {
    title,
    description,
    duration,
    price,
    minimumSkill,
    scholarshipAvailable,
  } = state;

  //   let handlePhoto = e => {
  //     let file = e.target.files[0];
  //     console.log(file);
  //     let reader = new FileReader();
  //     console.log(reader);
  //     reader.onload = () => {
  //       console.log(reader.result);
  //       setPhoto(reader.result);
  //     };
  //     let pdata = reader.readAsDataURL(file);
  //     console.log(pdata);
  //   };

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  /*  useEffect(() => {
    setState({ ...state, photo });
  }, [photo]); */
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = state;
      console.log(payload);
      let token = window.localStorage.getItem("token");
      console.log(token);
      let data = await AxiosInstance.post(
        `/bootcamps/63b2a1a3ca79f88417512d7f/courses`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <section className={Styles.CreateCourse}>
      <span>
        <MdAddToQueue style={{ fontSize: "50px", color: "grey" }} />
        <h2 className={Styles.bc1}>Add Courses</h2>
      </span>
      <article className={Styles.artCC}>
        <form
          onSubmit={handleSubmit}
          /*  ref={formRef} */
        >
          <div>
            <TextField
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              id="outlined-Title-input"
              label="Title"
              style={{
                width: "300px",
                paddingRight: "20px",
                paddingBottom: "20px",
              }}
              required
            />

            <TextField
              type="text"
              name="duration"
              value={duration}
              onChange={handleChange}
              id="outlined-Duration-input"
              label="Duration"
              style={{
                width: "200px",
                paddingRight: "20px",
                paddingBottom: "20px",
              }}
              required
            />

            <TextField
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
              id="outlined-Price-input"
              label="Price"
              style={{
                width: "100px",
                paddingRight: "20px",
                paddingBottom: "20px",
              }}
              required
            />

            <FormControl
              sx={{
                minWidth: 250,
                paddingRight: "20px",
                paddingBottom: "20px",
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Select Career
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                name="minimumSkill"
                onChange={handleChange}
                value={minimumSkill}
                autoWidth
                label="Minimum Skills"
              >
                <MenuItem value="minimumSkill">
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

            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                onChange={handleChange}
                value={scholarshipAvailable}
              >
                Scholarship Available
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Not Available"
                name="radio-buttons-group"
              >
                <span>
                  {" "}
                  <FormControlLabel
                    value="available"
                    control={<Radio />}
                    label="Available"
                  />
                  <FormControlLabel
                    value="Not Available"
                    control={<Radio />}
                    label="Not Available"
                  />
                </span>
              </RadioGroup>
            </FormControl>
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
            style={{ width: "1100px", paddingBottom: "20px" }}
          />

          <div></div>

          <div className={Styles.createBtn1}>
            <Button variant="outlined">
              <Link to="/" className={Styles.bootcampBtn}>
                Cancel
              </Link>
            </Button>
          </div>

          <div className={Styles.createBtn2}>
            <button className={Styles.createBtn22} type="submit">
              Add Course
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateCourses;

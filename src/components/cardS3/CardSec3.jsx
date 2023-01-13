import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Styles from "./_card3.module.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { BsBookmark } from "react-icons/bs";

const CardSec3 = () => {
  return (
    <section className={Styles.cardSec1}>
      <h2>Trending</h2>
      <article className={Styles.cardSub1}>
        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    How to easily create a website with React
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
              <hr style={{ color: "grey" }} />
              <div style={{ display: "flex", padding: "10px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/3245052?v=4"
                  sx={{ width: 30, height: 30 }}
                />
                <span>
                  <p style={{ padding: "5px" }}>Shashi Kunal</p>
                </span>
                <span>
                  &nbsp;
                  <button className={Styles.avatar}>
                    <BsBookmark />
                  </button>
                </span>
              </div>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    Angular-the complete guide for beginner
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
              <hr style={{ color: "grey" }} />
              <div style={{ display: "flex", padding: "10px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg"
                  sx={{ width: 30, height: 30 }}
                />
                <span>
                  <p style={{ padding: "5px" }}>Morris Mccoy</p>
                </span>
                <span>
                  <button className={Styles.avatar}>
                    <BsBookmark />
                  </button>
                </span>
              </div>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    GraphQL-introduction to graphQL for beginners
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
              <hr style={{ color: "grey" }} />
              <div style={{ display: "flex", padding: "10px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3.jpg"
                  sx={{ width: 30, height: 30 }}
                />
                <span>
                  <p style={{ padding: "5px" }}>Claire Robert</p>
                </span>
                <span>
                  <button className={Styles.avatar}>
                    <BsBookmark />
                  </button>
                </span>
              </div>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    The Python Course:build web application
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
              <hr style={{ color: "grey" }} />
              <div style={{ display: "flex", padding: "10px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2.jpg"
                  sx={{ width: 30, height: 30 }}
                />
                <span>
                  <p style={{ padding: "5px" }}>Juanita Bellitt</p>
                </span>
                <span>
                  <button className={Styles.avatar}>
                    <BsBookmark />
                  </button>
                </span>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default CardSec3;

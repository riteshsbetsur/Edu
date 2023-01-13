import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Styles from "./_cardS2.module.css";
import Rating from "@mui/material/Rating";

const CardSec2 = () => {
  return (
    <section className={Styles.cardSec1}>
      <h2>Most Popular</h2>
      <article className={Styles.cardSub1}>
        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    Applying JavaScript and using the console.
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    WordPress: complete WordPress theme & plugin
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    CSS: ultimate CSS course from beginner to advanced
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <br />
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={0.5}
                  readOnly
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={Styles.card1}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="" className={Styles.courseName}>
                    Gatsby JS: build blog with GraphQL and React
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
            </CardActionArea>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default CardSec2;

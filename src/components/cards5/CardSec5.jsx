import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Styles from "./__card5.module.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { BsBookmark } from "react-icons/bs";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CardSec5 = () => {
  return (
    <section className={Styles.cardSec1}>
      <h2>Best Seller</h2>
      <article className={Styles.cardSub1}>
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={4}
          step={4}
          loop={true}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              id="prev"
              className={Styles.prev1}
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0} className={Styles.slide}>
                    <div className={Styles.card1}>
                      <Card sx={{ maxWidth: 270 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg"
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={Styles.courseName}>
                                How to easily create a website with React
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              2 hours 30 minutes <br />
                              Intermediate
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
                              <button className={Styles.avatar}>
                                <BsBookmark />
                              </button>
                            </span>
                          </div>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Slide>

                  <Slide index={1} className={Styles.slide}>
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={Styles.courseName}>
                                Angular-the complete guide for beginner
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              3 hours 56 minutes <br />
                              Intermediate
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
                  </Slide>

                  <Slide index={2} className={Styles.slide}>
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={Styles.courseName}>
                                GraphQL-introduction to graphQL for beginners
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              2 hours 46 minutes <br />
                              Intermediate
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
                  </Slide>

                  <Slide index={3} className={Styles.slide}>
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={Styles.courseName}>
                                The Python Course:build web application
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              1 hours 30 minutes <br />
                              Intermediate
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
                  </Slide>

                  <Slide index={4} className={Styles.slide}>
                    <div className={Styles.card1}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg"
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={Styles.courseName}>
                                Gatsby JS: build blog with GraphQL and React
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              3 hours 56 minutes <br />
                              Intermediate
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
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className={Styles.next1}
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </article>
    </section>
  );
};

export default CardSec5;

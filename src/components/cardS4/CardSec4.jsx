import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import style1 from "./CardSec4";
import Avatar from "@mui/material/Avatar";
import { BsBookmark } from "react-icons/bs";
import { FiClock } from "react-icons/fi";


const CardSec4 = () => {
  return (
    <div className="container mx-auto" id={style1.Container}>
      <h2 id={style1.Title}>Most Popular</h2>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id={style1.prev}
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
                  id={style1.slider}
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0} id={style1.slide}>
                    <div className={style1.card1}>
                      <Card sx={{ maxWidth: 250 }}>
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
                              <a href="" className={style1.courseName}>
                                How to easily create a website with React
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
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
                              <button className={style1.avatar}>
                                <BsBookmark />
                              </button>
                            </span>
                          </div>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Slide>
                  <Slide index={1} id={style1.slide}>
                    <div className={style1.card1}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg"
                            alt="word press"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={style1.courseName}>
                                WordPress:complete <br />
                                WordPress theme & plugin
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <p>
                                <FiClock/> 2 hours 30 minutes
                                <br />
                                Intermediate
                              </p>
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
                              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg"
                              sx={{ width: 30, height: 30 }}
                            />
                            <span id={style1.NameO}>Juanita Bell</span>
                            <span>
                              <button className={style1.avatar}>
                                <BsBookmark />
                              </button>
                            </span>
                          </div>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Slide>
                  <Slide index={2} id={style1.slide}>
                    <div className={style1.card1}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg"
                            alt="css"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={style1.courseName}>
                                CSS:ultimate CSS course <br /> from beginner to
                                advance
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              1 hour 30 minutes <br />
                              Beginner
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
                              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg"
                              sx={{ width: 30, height: 30 }}
                            />
                            <span id={style1.NameO}>Morris Mccoy</span>
                            <span>
                              <button className={style1.avatar}>
                                <BsBookmark />
                              </button>
                            </span>
                          </div>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Slide>
                  <Slide index={3} id={style1.slide}>
                    <div className={style1.card1}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg"
                            alt="Gatsby"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={style1.courseName}>
                                Gastsby JS:build blog with <br />
                                GraphQL and React
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              3 hours 56 minutes <br />
                              Beginner
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
                              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg"
                              sx={{ width: 30, height: 30 }}
                            />
                            <span id={style1.NameO}>Keerthy</span>
                            <span>
                              <button className={style1.avatar}>
                                <BsBookmark />
                              </button>
                            </span>
                          </div>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Slide>
                  <Slide index={4} id={style1.slide}>
                    <div className={style1.card1}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg"
                            alt="angular"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <a href="" className={style1.courseName}>
                                Angular - the complete <br />
                                guide for beginner
                              </a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              1 hour 30 minutes <br />
                              Beginner
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
                              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg"
                              sx={{ width: 30, height: 30 }}
                            />
                            <span id={style1.NameO}>Aishu</span>
                            <span>
                              <button className={style1.avatar}>
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
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id={style1.next}
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
      </div>
    </div>
  );
};

export default CardSec4;

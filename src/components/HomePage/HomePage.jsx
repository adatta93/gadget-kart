import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const categories = [
    {
      img: "hp-spectre.jpeg",
      imgAlt: "Laptop",
      title: "Laptop",
      link: "/product/laptop",
      size: "",
    },
    {
      img: "boat-storm.jpeg",
      imgAlt: "Smartwatch",
      title: "Smartwatch",
      link: "/product/smartwatch",
      size: "",
    },
    {
      img: "sony-tv.jpeg",
      imgAlt: "TV",
      title: "TV",
      link: "/product/tv",
      size: "",
    },
    {
      img: "samsung-galaxy-note-9.jpeg",
      imgAlt: "Mobile",
      title: "Mobile",
      link: "/product/mobile",
      size: "large",
    },
    {
      img: "jbl-earphone.jpeg",
      imgAlt: "Headphones",
      title: "Headphones",
      link: "/product/headphones",
      size: "large",
    },
  ];

  return (
    <>
      <div
        id="homePageCarousel"
        className="carousel slide carousel-fade"
        data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#homePageCarousel"
            data-slide-to="0"
            className="active"></li>
          <li data-target="#homePageCarousel" data-slide-to="1"></li>
          <li data-target="#homePageCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              className="d-block w-100"
              alt="Carousel 1"
            />
            <div className="carousel-img-overlay"></div>
            <div className="container">
              <div className="carousel-caption text-center">
                <h1>Want to buy a New Mobile?</h1>
                <p>
                  Now you can get all the brand new mobiles in one shop, that
                  too with amazing offers and discounts. Available in all price
                  ranges
                </p>
                <p>
                  <Link to="/products/mobile" className="btn btn-lg btn-login">
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              className="d-block w-100"
              alt="Carousel 2"
            />
            <div className="carousel-img-overlay"></div>
            <div className="container">
              <div className="carousel-caption text-center">
                <h1>Planning to upgrade your Laptop?</h1>
                <p>
                  Make your work from home easy, play some awesome games - with
                  our wide range of laptops.
                </p>
                <p>
                  <Link to="/products/laptop" className="btn btn-lg btn-login">
                    Check It Out Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1193&q=80"
              className="d-block w-100"
              alt="Carousel 3"
            />
            <div className="carousel-img-overlay"></div>
            <div className="container">
              <div className="carousel-caption text-center">
                <h1>Enjoy listening to songs while Working?</h1>
                <p>
                  Buy brand new earphones, wireless earbuds in affordable prices
                </p>
                <p>
                  <Link
                    to="/products/headphones"
                    className="btn btn-lg btn-login">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#homePageCarousel"
          role="button"
          data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#homePageCarousel"
          role="button"
          data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
        </a>
      </div>
      <div className="container my-4">
        <div className="directory-menu">
          {categories &&
            categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className={`${cat.size} menu-item`}>
                <div
                  className="background-image"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${cat.img})`,
                  }}
                />
                <div className="content">
                  <div className="title">{cat.title.toUpperCase()}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;

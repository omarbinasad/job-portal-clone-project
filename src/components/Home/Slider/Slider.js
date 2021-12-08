import React from "react";
import "./slider.css";
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner bg-primary">
          <div className="carousel-item active ">
            <img
              style={{ height: "300px", opacity: "0.6" }}
              src={slide1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption slider-content d-none d-md-block">
              <h5>First Title Here</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button className="btn btn-primary">Explore Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "300px", opacity: "0.6" }}
              src={slide2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption slider-content d-none d-md-block">
              <h5>Second Title Here</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button className="btn btn-primary">Download</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;

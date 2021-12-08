import React from "react";
import "./HotJobSingle.css";

const HotJobSingle = ({ job }) => {
  const { id, title, role, image } = job;

  return (
    <div>
      <div className="hot-job-single-container d-flex p-3 border align-items-center ">
        <img className="border" src={image} alt="" />
        <div className="job-content ms-3 d-flex flex-column align-items-center justify-content-center ">
          <h2 style={{ fontSize: "14px", color: "#29578f" }}>{title}</h2>
          <p className=" text-secondary">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default HotJobSingle;

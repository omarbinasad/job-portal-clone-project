import React from "react";
import "./TenderSingle.css";

const TenderSingle = ({ tender }) => {
  const { id, title, role, image } = tender;
  return (
    <div className="">
      <div className="tender-single-container rounded d-flex p-3 bg-white mx-2 mb-3 align-items-center ">
        <img className="border" src={image} alt="" />
        <div className="tender-content ms-3 d-flex flex-column align-items-start justify-content-center ">
          <h2>{title}</h2>
          <p className=" text-secondary">{role}</p>
          <p className=" text-secondary">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TenderSingle;

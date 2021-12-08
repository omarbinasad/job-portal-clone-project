import React from "react";
import "./CategoryAllContents.css";

const CategoryAllContents = () => {
  return (
    <div>
      {/* all Contents here */}
      <div className="all-jobs-right p-3 ">
        <h3 className="text-start">Click to view Details</h3>
        <div>
          <div className="content-details d-flex justify-content-between">
            <div className="left-content">
              <a href="#">Title here</a>
              <h5>Subtitle here</h5>

              <h6>
                {" "}
                <i className="fas fa-tag"></i> Location
              </h6>
              <h6>
                <i className="fas fa-tag"></i> Education
              </h6>
              <h6>
                {" "}
                <i className="fas fa-tag"></i> Exp Years
              </h6>
            </div>
            <div className="right-content">
              <i className="fas fa-home logo-icon"></i>
              <h6>
                <i class="far fa-calendar-alt"></i> Deadline:
                <strong>18 Dec</strong> 2021
              </h6>
            </div>
          </div>
          <div className="content-details d-flex justify-content-between">
            <div className="left-content">
              <a href="#">Title here</a>
              <h5>Subtitle here</h5>

              <h6>
                {" "}
                <i className="fas fa-tag"></i> Location
              </h6>
              <h6>
                <i className="fas fa-tag"></i> Education
              </h6>
              <h6>
                {" "}
                <i className="fas fa-tag"></i> Exp Years
              </h6>
            </div>
            <div className="right-content">
              <i className="fas fa-home logo-icon"></i>
              <h6>
                <i class="far fa-calendar-alt"></i> Deadline:
                <strong>18 Dec</strong> 2021
              </h6>
            </div>
          </div>
          <div className="content-details d-flex justify-content-between">
            <div className="left-content">
              <a href="#">Title here</a>
              <h5>Subtitle here</h5>

              <h6>
                {" "}
                <i className="fas fa-tag"></i> Location
              </h6>
              <h6>
                <i className="fas fa-tag"></i> Education
              </h6>
              <h6>
                {" "}
                <i className="fas fa-tag"></i> Exp Years
              </h6>
            </div>
            <div className="right-content">
              <i className="fas fa-home logo-icon"></i>
              <h6>
                <i class="far fa-calendar-alt"></i> Deadline:
                <strong>18 Dec</strong> 2021
              </h6>
            </div>
          </div>
          <div className="content-details d-flex justify-content-between">
            <div className="left-content">
              <a href="#">Title here</a>
              <h5>Subtitle here</h5>

              <h6>
                {" "}
                <i className="fas fa-tag"></i> Location
              </h6>
              <h6>
                <i className="fas fa-tag"></i> Education
              </h6>
              <h6>
                {" "}
                <i className="fas fa-tag"></i> Exp Years
              </h6>
            </div>
            <div className="right-content">
              <i className="fas fa-home logo-icon"></i>
              <div>
                <h6>
                  <i class="far fa-calendar-alt"></i> Deadline:
                  <strong>18 Dec</strong> 2021
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAllContents;

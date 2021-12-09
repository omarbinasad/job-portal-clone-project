import React from "react";
import "./CategoryAllContents.css";

const CategoryAllContents = () => {
  return (
    <div>
      {/* all Contents here */}
      <div className="all-jobs-right p-3 ">
        <div className="d-flex justify-content-between w-100 my-3">
          <h5 className="text-secondary text-start">Click to view Details</h5>
          <div className="jobsppge d-flex">
            <label for="cmbjobsPerPage">Jobs per page</label>
            <div className="ms-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>10</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>
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
                <i className="far fa-calendar-alt"></i> Deadline:
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
                <i className="far fa-calendar-alt"></i> Deadline:
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
                <i className="far fa-calendar-alt"></i> Deadline:
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
                  <i className="far fa-calendar-alt"></i> Deadline:
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

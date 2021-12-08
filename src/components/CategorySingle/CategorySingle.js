import React from "react";
import CategoryAllContents from "./CategoryAllContents/CategoryAllContents";
import "./CategorySingle.css";
import FloatingBar from "./FloatingBar/FloatingBar";

const CategorySingle = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
      }}
    >
      <div className="container">
        {/* top pagination wrapper */}
        <div className="container py-4" id="main">
          <div className="row">
            <div className="col-md-12">
              <div className="top-stat-wrapper">
                <div className="row">
                  <div className="col-sm-6" role="main">
                    <div className="ststxt" id="ststxt">
                      <div className="jswrap" id="TopTotalRecord">
                        <span className="dnum">360</span>
                        Jobs
                      </div>
                      <div className="vacwrap" id="TopTotalVacancy">
                        <span className="dnum">814+</span>
                        Vacancies
                      </div>
                    </div>
                    <div id="bngEngJobs" className="hide"></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pagination" id="topPagging">
                      <div className="p-st-txt">Pages :</div>
                      <ul>
                        <li>
                          <a href="#1" className="currentpage">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#2">2</a>{" "}
                        </li>
                        <li>
                          <a href="#3">3</a>{" "}
                        </li>
                        <li>
                          <a href="#4">4</a>{" "}
                        </li>
                        <li>
                          <a href="#5">5</a>{" "}
                        </li>
                        <li>
                          <a href="#18">...18</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top pagination wrapper end */}
        {/* active filters wrapper start */}
        <div className="active-filters-wrapper d-flex mb-5">
          <div className="active-filters-left">
            <h2>Active Filters</h2>
          </div>
          <div className="active-filters-right"></div>
        </div>
        {/* active filters wrapper end */}
        <div className="floatBar-main">
          {" "}
          <FloatingBar></FloatingBar>
          <CategoryAllContents></CategoryAllContents>
        </div>
      </div>
    </div>
  );
};

export default CategorySingle;

import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row banner-contents">
          <div className="d-flex flex-column justify-content-center align-items-start banner-left-content col-md-9 col-sm-12">
            <h1 className="banner-title">Find the right job</h1>
            {/* Search Form start  */}
            <form className="search-form mt-3 rounded row gx-3 gy-2">
              <div className="search-input col-lg-6 col-sm-3">
                {/* <label className="visually-hidden" for="specificSizeInputName">
                  Name
                </label> */}

                <div className="input-group">
                  <div className="input-group-text">
                    <i className="fas fa-tag"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="specificSizeInputName"
                    placeholder="Search by keyword"
                  />
                </div>
              </div>
              <div className="org-input col-lg-4 col-sm-3">
                <div className="input-group">
                  <div className="input-group-text">
                    <i className="far fa-building"></i>
                  </div>
                  <select className="form-select" id="specificSizeSelect">
                    <option selected>Organization Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <button
                  type="submit"
                  className="btn btn-default search-btn w-100"
                >
                  Search
                </button>
              </div>
            </form>
            {/* Search Form end */}

            <div className="banner-counter-main py-4 d-flex">
              <div className="d-flex">
                <div className="live-jobs-icon banner-counter-icon ">
                  <div className="icon-div">
                    <i className="fas fa-chart-line"></i>
                  </div>
                </div>
                <div className="live-jobs-content">
                  {" "}
                  <h2>LIVE JOBS</h2>
                  <p>4,349</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="banner-counter-icon ">
                  <div className="icon-div">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="live-jobs-content">
                  {" "}
                  <h2>VACANCIES</h2>
                  <p>15,349</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="banner-counter-icon ">
                  <div className="icon-div">
                    <i className="far fa-building"></i>
                  </div>
                </div>
                <div className="live-jobs-content">
                  {" "}
                  <h2>COMPANIES</h2>
                  <p>2,298</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="banner-counter-icon ">
                  <div className="icon-div">
                    {" "}
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                </div>
                <div className="live-jobs-content">
                  {" "}
                  <h2>NEW JOBS</h2>
                  <p>228</p>
                </div>
              </div>
            </div>
          </div>
          {/* Banner sidebar start */}
          <div className="banner-right-content col-md-3 col-sm-12">
            <div className="banner-sidebar">
              <div className="division">
                <h2>DIVISIONAL JOBS</h2>

                <div className="all-divisions py-2">
                  <a href="#" class="btn btn-default" target="_blank">
                    Dhaka <span>(2715)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Barishal <span>(40)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Khulna <span>(105)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Sylhet <span>(89)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Chattogram <span>(478)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Rajshahi <span>(108)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Rangpur <span>(145)</span>
                  </a>
                  <a href="#" class="btn btn-default" target="_blank">
                    Mymensingh <span>(85)</span>
                  </a>
                </div>
              </div>
              <div
                className="division quick-links desktop"
                role="region"
                aria-label="Quick links Navigation"
              >
                <h2>QUICK LINKS</h2>
                <div className="ql-list">
                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Employer List
                  </a>

                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>&nbsp;New Jobs (24
                    hrs)
                  </a>

                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>&nbsp; Deadline
                    Tomorrow
                  </a>

                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>
                    &nbsp;Contractual Jobs
                  </a>

                  <a href="#" target="_blank" class="yellow">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Part time
                    Jobs
                  </a>

                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Overseas Jobs
                  </a>

                  <a href="#" target="_blank">
                    <i class="fas fa-angle-double-right"></i>&nbsp;Work From
                    Home
                    <span
                      class="badge"
                      style={{
                        backgroundColor: "#FFF176",
                        color: "#333333",
                        fontSize: "11px",
                        lineHeight: "10px",
                        position: "absolute",
                        padding: "0px 5px 3px 5px",
                        margin: "5px 0px 0px 2px",
                      }}
                    >
                      new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import "./BrowseCategory.css";

const BrowseCategory = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
      }}
      className="py-3"
    >
      {/* brows category */}
      <div className="container browse-category-main ">
        {" "}
        <div className="row ">
          <div className="category-container py-3 border col-md-9 col-sm-12">
            {" "}
            <div className="category-container-top ">
              <h2 className="d-flex">
                {" "}
                <i className="fas fa-list"></i>&nbsp; Browse Category
              </h2>{" "}
              <ul
                className="nav nav-pills all-tab-btns
             mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className=" tab-btn tab-btn-1 btn btn-defalt active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Functional
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-btn-2 tab-btn btn btn-defalt"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Industrial
                  </button>
                </li>
              </ul>{" "}
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="category-list padding-mobile functional active">
                  <div className="col-md-4 col-lg-4 category-col-1">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-4 category-col-2 m-active">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-lg-4 category-col-3 m-active">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="category-list padding-mobile functional active">
                  <div className="col-md-4 col-lg-4 category-col-1">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-4 category-col-2 m-active">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-4 category-col-3 m-active">
                    <ul>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="single-category" target="_blank">
                          <i className="fas fa-caret-right"></i>{" "}
                          Accounting/Finance <span>(334)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="row">
              {/* Carousel slider start  */}
              <div className="col-md-12">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner bg-primary">
                    <div
                      style={{ height: "250px" }}
                      className="carousel-item  active "
                    >
                      <div className="carousel-caption slider-content d-none d-md-block">
                        <h5>First Title Here</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "250px" }} className="carousel-item">
                      <div className="carousel-caption slider-content d-none d-md-block">
                        <h5>Second Title Here</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
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
            </div>
            <div className="row">
              <div className="col-md-12 hidden-sm hidden-xs">
                <div
                  className="ocusl-wrap"
                  role="region"
                  aria-label="i2i career pathway for persons with disabilities"
                >
                  <div className="whalf mln">
                    <a href="#" className="inhousc" target="_blank">
                      <img
                        className="img-responsive"
                        src="https://www.bdjobs.com/images/Bdesh-Jobs.png"
                        alt="Logo of i2i"
                        title="i2i career pathway for persons with disabilities"
                      />
                    </a>
                  </div>
                  <div className="whalf">
                    <a href="#" className="inhousc" target="_blank">
                      <img
                        className="img-responsive"
                        src="https://www.bdjobs.com/images/bdjobsHomeRight_2ColBanner_i2i.jpg"
                        alt="Largest Overseas Job Site in Bangladesh"
                        title="bdeshjobs"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* special skilled jobs  */}
      <div className="my-4">
        <div className="container browse-category-main ">
          {" "}
          <div className="row ">
            <div className="category-container py-3 border col-md-9 col-sm-12">
              {" "}
              <div className="category-container-top ">
                <h2 className="d-flex">
                  {" "}
                  <i className="fas fa-list"></i>&nbsp; স্পেশাল স্কিল্‌ড জব্‌স
                </h2>{" "}
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="category-list padding-mobile functional active">
                    <div className="col-md-4 col-lg-4 category-col-1">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-lg-4 category-col-2 m-active">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-lg-4 category-col-3 m-active">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body p-0 border-0 m-0">
                  <div className="category-list padding-mobile functional active">
                    <div className="col-md-4 col-lg-4 category-col-1">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-lg-4 category-col-2 m-active">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-lg-4 category-col-3 m-active">
                      <ul>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-category" target="_blank">
                            <i className="fas fa-caret-right"></i>{" "}
                            Accounting/Finance <span>(334)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-view fun-cat active"></div>
                  </div>
                </div>
              </div>
              <p>
                <button
                  className="btn see-more-btn btn-default me-auto border"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  See More
                </button>
              </p>
            </div>

            <div className="col-md-3 col-sm-12">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
              <div className="row">
                <div className="col-md-12 hidden-sm hidden-xs">
                  <div className="">
                    <Link to="#" target="_blank">
                      <img
                        className="img-responsive w-100"
                        src="https://tpc.googlesyndication.com/simgad/245062538129692390"
                        alt="Logo of i2i"
                      />
                    </Link>
                  </div>

                  <div className="mt-2">
                    <Link to="#" target="_blank">
                      <img
                        className="img-responsive w-100"
                        src="https://tpc.googlesyndication.com/simgad/12311627882558198740"
                        alt="Logo of i2i"
                      />
                    </Link>
                  </div>
                  <div className="mt-2">
                    <Link to="#" target="_blank">
                      <img
                        className="img-responsive w-100"
                        src="https://tpc.googlesyndication.com/simgad/12063252530905374204"
                        alt="Logo of i2i"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default BrowseCategory;

import React from "react";
import "./FloatingBar.css";

const FloatingBar = () => {
  return (
    <div>
      <div className="floatBar-btn-container">
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-tag"></i>
            <h2>Keywords</h2>
          </button>
          <ul className="dropdown-menu dropdown-box">
            {" "}
            <li className="container">
              <div className="row">
                <div className="col-sm-12">
                  <label for="txtsearch" className="text-white stitle-text-box">
                    Search by keyword
                  </label>
                  <div className="search-wrapper">
                    <div className="search-container">
                      <form
                        role="search"
                        method="get"
                        className="form"
                        action=""
                      >
                        <label>
                          <span className="screen-reader-text">
                            Search for...
                          </span>
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Type something..."
                            value=""
                            name="s"
                            title=""
                          />
                        </label>
                        <button
                          type="submit"
                          className="search-submit button"
                          value=""
                        >
                          {" "}
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-building"></i>
            <h2>Industry</h2>
          </button>

          <ul className="dropdown-menu dropdown-box">
            <li className="container">
              <div className="row">
                <div className="col-sm-12">
                  <label for="txtsearch" className="text-white stitle-text-box">
                    Search by keyword
                  </label>
                  <div className="dropdown-box-wrapper">
                    <div className="dropdown-box-inner-left">
                      <form className="radio-input-form">
                        <input type="radio" name="fav_language" value="HTML" />
                        <label className="" for="html">
                          &nbsp; HTML
                        </label>
                        <br />
                        <input
                          type="radio"
                          id="css"
                          name="fav_language"
                          value="CSS"
                        />
                        <label className="" for="css">
                          &nbsp; CSS
                        </label>
                        <br />
                        <input
                          type="radio"
                          id="javascript"
                          name="fav_language"
                          value="JavaScript"
                        />
                        <label className="" for="javascript">
                          &nbsp; JavaScript
                        </label>
                        <br />
                      </form>
                    </div>
                    <div className="dropdown-box-inner-left"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-map-marker-alt"></i>
            <h2>Location</h2>
          </button>
          <ul className="dropdown-menu">sadsasdsadsa</ul>
        </div>
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-list"></i>
            <h2>Category</h2>
          </button>
          <ul className="dropdown-menu">sadsasdsadsa</ul>
        </div>
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="far fa-calendar-alt"></i>
            <h2>Deadline</h2>
          </button>
          <ul className="dropdown-menu">sadsasdsadsa</ul>
        </div>
        <div className="btn-group dropend">
          <button
            type="button"
            className="btn btn-secondary dropside-btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-filter"></i>
            <h2>Other Filters</h2>
          </button>
          <ul className="dropdown-menu">sadsasdsadsa</ul>
        </div>
        <button className="dropside-btn">
          <h6>Close all</h6> <i className="fas fa-times"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default FloatingBar;

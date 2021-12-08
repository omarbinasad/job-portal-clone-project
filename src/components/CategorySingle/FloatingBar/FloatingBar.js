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
            <h2>Dropright</h2>
          </button>
          <ul class="dropdown-menu dropdown-search">
            <li class="container">
              <div class="row">
                <div class="col-sm-12">
                  <label for="txtsearch" class="stitle-text-box">
                    Search by keyword
                  </label>
                  <div class="input-group">
                    <input
                      name="txtsearch"
                      id="txtsearch"
                      class="form-control"
                      placeholder="Search for..."
                      size="50"
                      maxlength="50"
                      type="text"
                    />
                    <span class="input-group-btn">
                      <button
                        class="btn done-button-s"
                        onclick="showSearchedResult('dropdown_bottom')"
                        type="button"
                      >
                        <i className="bg-primary px-3 py-1 rounded fas fa-search"></i>
                      </button>
                    </span>
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
            <h2> Dropright</h2>
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
            <i className="fas fa-tag"></i>
            <h2> Dropright</h2>
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
            <h2> Dropright</h2>
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
            <i className="fas fa-tag"></i>
            <h2> Dropright</h2>
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
            <i className="fas fa-tag"></i>
            <h2>Dropright</h2>
          </button>
          <ul className="dropdown-menu">sadsasdsadsa</ul>
        </div>
        <button className="dropside-btn">
          Close all <i className="fas fa-times"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default FloatingBar;

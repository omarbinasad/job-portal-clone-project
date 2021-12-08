import React, { useEffect, useState } from "react";
import HotJobSingle from "../HotJobSingle/HotJobSingle";
import "./HotJobs.css";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("HotJobs.JSON")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="container">
      <div>
        <div className="hot-jobs py-3">
          {" "}
          <h2 style={{ color: "#2a5992", fontSize: "18px", fontWeight: "700" }}>
            <span style={{ color: "red" }}>
              {" "}
              <i class="fas fa-fire"></i> HOT{" "}
            </span>
            JOBS
          </h2>
          <div className="d-flex jobs-container flex-wrap align-items-center py-2">
            {jobs.map((job) => (
              <HotJobSingle key={job.id} job={job}></HotJobSingle>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobs;

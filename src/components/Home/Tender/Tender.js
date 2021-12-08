import React, { useEffect, useState } from "react";
import TenderSingle from "../TenderSingle/TenderSingle";
import "./Tender.css";

const Tender = () => {
  const [tenders, setTenders] = useState([]);
  useEffect(() => {
    fetch("HotJobs.JSON")
      .then((res) => res.json())
      .then((data) => setTenders(data));
  }, []);
  return (
    <div className="py-3" style={{ backgroundColor: "#eeeeee" }}>
      <div className="tenders-container container py-3">
        <h2
          style={{
            color: "#2a5992",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          <i class="fas fa-briefcase"></i> TENDER/EOI
        </h2>
        <div>
          <div className="d-flex tenders flex-wrap align-items-center py-2">
            {tenders.map((tender) => (
              <TenderSingle key={tender.id} tender={tender}></TenderSingle>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tender;

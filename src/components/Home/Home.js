import React from "react";
import Banner from "./Banner/Banner";
import BrowseCategory from "./BrowseCategory/BrowseCategory";
import Slider from "./Slider/Slider";
import HotJobs from "./HotJobs/HotJobs";
import Tender from "./Tender/Tender";
import DayLongTraining from "./DayLongTraining/DayLongTraining";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BrowseCategory></BrowseCategory>
      <HotJobs></HotJobs>
      <Tender></Tender>
      <Slider></Slider>
      <DayLongTraining></DayLongTraining>
    </div>
  );
};

export default Home;

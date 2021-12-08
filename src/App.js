import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CategorySingle from "./components/CategorySingle/CategorySingle";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        {" "}
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="single-category"
            element={<CategorySingle> </CategorySingle>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

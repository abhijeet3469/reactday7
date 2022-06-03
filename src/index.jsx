import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Useparams from "./Hooks/Useparams";
import Usestate from "./Hooks/Usestate";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        {/* useParams */}
        <Route path="/book/:name/:id" element={<Useparams />} />
        {/* useState */}
        <Route path="/" element={<Usestate/>} />
      </Routes>
    </BrowserRouter>
  </>
);

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Level1 from "./routes/Level1";
import Level2 from "./routes/Level2";
import Level3 from "./routes/Level3";
import Level4 from "./routes/Level4";
import Level5 from "./routes/Level5";
import Level6 from "./routes/Level6";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="level1" element={<Level1 />} />
        <Route path="level2" element={<Level2 />} />
        <Route path="level3" element={<Level3 />} />
        <Route path="level4" element={<Level4 />} />
        <Route path="level5" element={<Level5 />} />
        <Route path="level6" element={<Level6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

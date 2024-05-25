import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/home";
import Footer from "./components/FooterHome";
import "./App.css";

function App() {
  const HeaderLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<HeaderLayout />}>
          <Route path="*" element={<p>Error 404</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

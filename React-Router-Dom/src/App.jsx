import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages02/Home";
import About from "./Pages02/About";
import Contact from "./Pages02/Contact";
import Product from "./Pages02/Product";
import NotFound from "./Pages02/NotFound";
import Men from "./Pages02/Men";
import Womens from "./Pages02/Womens";
import Kids from "./Pages02/Kids";
import Courses from "./Pages02/Courses";
import CourseDetails from "./Pages02/CourseDetails";

const App = () => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen text-white">
        <Navbar />
        <Footer />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        {/* Advanced Routing   */}

        {/* dynamic routing */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Womens />} />
            <Route path="kids" element={<Kids />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

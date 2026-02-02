import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />

      {/* Page transition wrapper */}
      <div className="page-transition">
        {renderPage()}
      </div>

      {/* CTA should appear on all pages EXCEPT home */}
      {page !== "home" && <CTA />}

      {/* Footer always at bottom */}
      <Footer />
    </>
  );
}

export default App;

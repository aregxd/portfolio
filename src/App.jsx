import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import TechStack from "./components/TechStack";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

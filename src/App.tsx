
import { lazy, Suspense } from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./components/Footer";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

// Página dedicada à NetoStore
const NetoStore = lazy(() => import("./sections/NetoStore"));

function App() {
  // Verifica se estamos na página da NetoStore
  const isNetoStorePage =
    window.location.pathname.replace(/\/+$/, "") ===
    "/projects/netostore";

  // Página completa da NetoStore
  if (isNetoStorePage) {
    return (
      <Suspense fallback={null}>
        <NetoStore />
      </Suspense>
    );
  }

  // Página principal do portfólio
  return (
    <>
      <Navbar />

      <main>
        <Home />

        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;

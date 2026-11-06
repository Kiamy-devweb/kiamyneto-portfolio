
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./components/Footer";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));

function App() {
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

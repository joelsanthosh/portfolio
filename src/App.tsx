import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-brand-light dark:bg-brand-dark">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="flex h-[60vh] flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-bold text-brand-primary">404</h1>
                <p className="text-xl text-zinc-500">Page not found</p>
                <a
                  href="/"
                  className="rounded-full bg-brand-primary px-6 py-2 text-white hover:bg-brand-primaryHover transition-all"
                >
                  Go Home
                </a>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="flex min-h-screen flex-col bg-brand-light dark:bg-brand-dark text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

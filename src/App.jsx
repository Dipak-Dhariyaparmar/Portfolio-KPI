import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#3182ce",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

const MotionBox = motion.div;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Services />
        <FAQ />
        <Contact />
        <Footer />
      </MotionBox>
    </ChakraProvider>
  );
}

export default App;

// this component is related to app page

import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Cases from "./components/Cases";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      {/* ✅ 3D MODEL IS ONLY INSIDE HERO */}
      <Hero />

      {/* ❌ NO 3D MODEL AFTER THIS */}
      <Intro />
      <Cases />
      <Footer />
    </>
  );
}

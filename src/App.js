import { BrowserRouter } from "react-router-dom";
import { herobg } from "./assets";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Socails,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: "#050816", color: "#ffffff" }}
        className='relative z-0 min-h-screen selection:bg-[#915EFF] selection:text-white'
      >
        <div
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundColor: "#050816",
          }}
          className='bg-cover bg-no-repeat bg-center relative bg-[#050816]'
        >
          <Navbar />
          <Hero />
        </div>

        {/* Ambient background glow accents */}
        <div className='relative'>
          <About />
          <Works />
          <Tech />
          <Experience />
          <div className='relative z-0'>
            <Contact />
            <Socails />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

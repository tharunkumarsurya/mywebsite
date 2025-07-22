import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { isAndroidDevice } from "./utils/detectDevice"; // ✅ New import

const App = () => {
  const [hide, setHide] = useState(true);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(isAndroidDevice());
  }, []);

 if (isAndroid) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen bg-black text-white text-center p-4">
      <h1 className="text-xl font-bold">
              🚫 This 3D Portfolio is not supported on <span className="text-red-500">ANDROID DEVICE .</span><br />
          Please use a <span className="text-green-500">Laptop or Apple device</span> 🚫.
      </h1>

      <a
        href="https://tharunsurya.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img src="https://img.shields.io/badge/%F0%9F%91%89%20Visit%20My%20OLD%20Portfolio%20%F0%9F%91%88-white?style=for-the-badge&logo=About.me&logoColor=green&labelColor=green&color=green" />

      </a>
    </div>
  );
}


  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

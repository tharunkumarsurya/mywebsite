import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { close, bulb } from "../assets";

type BannerProps = {
  hide: boolean;
  setHide: (hide: boolean) => void;
};

const BANNER_KEY = "hide-banner";

const Banner = ({ hide, setHide }: BannerProps) => {
  useEffect(() => {
    const hideBanner = localStorage.getItem(BANNER_KEY);

    if (hideBanner) return;

    const bannerTimer = setTimeout(() => {
      setHide(false);
    }, 5000);

    return () => clearTimeout(bannerTimer);
  }, []);

  const handleBannerClose = () => {
    setHide(true);
    localStorage.setItem(BANNER_KEY, "1");
  };

 return (
  <div
    id="sticky-banner"
    tabIndex={-1}
    className={`${
      hide ? "hidden" : "flex"
    } fixed top-0 left-0 w-full z-[9999] min-h-[100px] bg-primary justify-between p-4 shadow-md opacity-95`}
  >
    <div className="flex items-center mx-auto">
      <p className="text-sm text-gray-300">
        If this <span className="text-green-500">3D-PORTFOLIO</span> is NOT supported <br />
        on your <span className="text-red-500">ANDROID DEVICE</span>, visit 👉{" "}
        <a
          href="https://tharunsurya.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          OLD Portfolio
        </a>{" "}
        👈.
      </p>
    </div>
    <button
      onClick={handleBannerClose}
      className="text-gray-400 hover:text-white ml-4"
    >
      Close Banner ✖
    </button>
  </div>
);

};

export default Banner;

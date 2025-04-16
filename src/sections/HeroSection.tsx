import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex">
      {/* Lewa kolumna */}
      <div className="w-1/2 bg-[#1e1a18] text-white flex items-center justify-center">
        <div className="max-w-md px-6">
          <h1 className="text-5xl leading-[1.1] font-light">
            The life<br />
            <span className="font-bold">you want</span>
          </h1>
          <p className="mt-8 text-xl leading-snug font-normal">
            Welcome to the<br />
            Fagor Electrodomestico<br />
            world.
          </p>
        </div>
      </div>

      {/* Prawa kolumna */}
      <div className="w-1/2 h-full">
        <img
          src="/assets/hero-image.jpg"
          alt="Fagor hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

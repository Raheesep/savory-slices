import React from 'react';
import headerImage from '../assets/savory-header.jpeg'; 

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <div className="relative w-full lg:w-1/2 bg-gradient-to-b from-[#d4001a] to-[#fa3748] flex items-center justify-center p-6">
        <div className="hidden lg:block absolute top-4 left-4 text-white text-xl md:text-2xl font-bold z-20">
          Savory Slices.
        </div>
        <div className="block lg:hidden absolute bottom-4 text-white text-lg font-bold z-20 text-center">
          Savory Slices.
        </div>
        <div className="relative z-10">
          <img
            src={headerImage}
            alt="Kerala Banana Chips"
            className="max-h-[60vh] lg:max-h-[80%] object-contain"
          />
        </div>
        <div className="absolute w-[60%] h-[60%] bg-yellow-400 rounded-full z-0" />
      </div>
      <div className="w-full lg:w-1/2 bg-[#f8f8f8] flex flex-col justify-between pl-10 pr-6 py-10 relative text-lg md:text-xl">
  {/* Top Nav Links */}
  <div className="flex justify-center lg:justify-end space-x-6 text-gray-800 font-medium mb-4 mr-5">
    <a href="#products" className="hover:text-[#d4001a]">Our Products</a>
    <a href="#about" className="hover:text-[#d4001a]">About</a>
    <a href="#footer" className="hover:text-[#d4001a]">Contact</a>
  </div>

  {/* Center Content */}
  <div className="flex-grow flex flex-col justify-center items-start text-left pr-4">
    <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
      Let's Redefine<br />Snacking
    </h1>
    <p className="text-gray-700 max-w-xl leading-relaxed">
      Instead of mindlessly munching, it could mean intentionally enjoying small,
      nutritious bites to fuel your body and satisfy cravings in a balanced way.
    </p>
  </div>

  {/* Scroll Label */}
  <div className="hidden lg:block text-sm tracking-widest text-gray-500 rotate-90 absolute right-2 bottom-8">
    SCROLL
  </div>
</div>

    </div>
  );
}

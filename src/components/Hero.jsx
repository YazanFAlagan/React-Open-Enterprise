import React from 'react';

const Hero = () => {
  return (
    <section id="why" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          A new model for open collaboration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Run an organization where members get rewarded for their contributions with fractional ownership.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg">
          Request early access
        </button>
      </div>
    </section>
  );
};

export default Hero;

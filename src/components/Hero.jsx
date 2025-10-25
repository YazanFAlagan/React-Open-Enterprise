import React from 'react'

const Hero = () => {
  return (
    <section id="why" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 ">
      <div className="max-w-7xl mx-auto text-left">
        <h1 className="text-5xl md:text-6xl font-boldd text-gray-900 mb-6">
          Building something amazing together
        </h1>
        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
          We beleive great things happen when everyone has a real stake in the outcome. Join us in creating organizations where contributions are valued and rewarded fairly.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg">
          Request early access
        </button>
      </div>
    </section>
  );
};

export default Hero;

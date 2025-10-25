import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start an Open Enterprise
        </h2>
        <p className="text-xl mb-8 opacity-90">
          If you can't wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we'd love to get you started.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
          Request early access
        </button>
      </div>
    </section>
  );
};

export default CTA;

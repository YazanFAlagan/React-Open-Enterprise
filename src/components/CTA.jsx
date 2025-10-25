import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          We're in beta and looking for early adopters who want to try something diffrent. If you're excited about building a fairer, more collaborative organization, let's talk!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transiton shadow-lg">
          Request early access
        </button>
      </div>
    </section>
  );
};

export default CTA;

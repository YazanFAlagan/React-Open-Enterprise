import React from 'react';

const Founders = () => {
  const founders = [
    { name: 'Yazan', shares: 100 },
    { name: 'Ahmed', shares: 100 },
    { name: 'Asmaa', shares: 100 }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Kickstart an organization with your co-founders
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          It's the early days, you just had a long conversation with two friends about a meaningful challenge that you're all passionate about and have a potential solution for. You're ready to embark the startup journey.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Members</h3>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h4>
              <p className="text-blue-600 font-semibold">{founder.shares} SHARES</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

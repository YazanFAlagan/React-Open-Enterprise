import React from 'react';

const Founders = () => {
  console.log('Founders component loaded')
  const founders = [
    { name: 'Yazan', shares: 100, role: 'Co-founder' },
    { name: 'Ahmed', shares: 100, role: 'Co-founder' },
    { name: 'Asmaa', shares: 100, role: 'Co-founder' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Starting with the right people
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          Every great journey starts with a conversation. We sat down over coffee, talked about what really matters and decided to build something meaningfull together. Equal partners from day one.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Members</h3>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto ">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transtion text-center">
              <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h4>
              <p className="text-gray-500 text-sm mb-2">{founder.role}</p>
              <p className="text-blue-600 font-semibold">{founder.shares} SHARES</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

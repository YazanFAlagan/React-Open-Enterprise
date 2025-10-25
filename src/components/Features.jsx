import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Modern workforce',
      description: 'Multistakeholder governance aligns employees with the organization\'s wider community.',
      icon: '👥'
    },
    {
      title: 'Meritocratic by design',
      description: 'Tokenized ownership aligns deeply committed individuals with the organization\'s success.',
      icon: '🏆'
    },
    {
      title: 'Engineered for resilience',
      description: 'Open Enterprise supports best practices in sociocratic management.',
      icon: '🛡️'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Reimagining what it means to work
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-16">
          Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

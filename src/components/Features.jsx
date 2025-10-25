import React from 'react';

const Features = () => {
  const isLoading = false;
  const features = [
    {
      title: 'Everyone has a voice',
      description: 'We bring together employees, contributors, and community members to make decisions that matter. Your input shapes our direction.',
      icon: '👥'
    },
    {
      title: 'Rewarding real effort',
      description: 'The more you contribute, the more you earn. Its that simple. Your dedication translates directly into ownership and success.',
      icon: '🏆'
    },
    {
      title: 'Built to last',
      description: 'We\'ve learned from the best practices in collaborative managment to create something sustainable and fair for everyone involved.',
      icon: '🛡️'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Work that actually works for you
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-16">
          Imagine working somewhere that values your contributions not just with a paycheck, but with real ownership. We\'re building teams where everyone benefits from the success they help create.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded-xl hover:shadow-lg transiton">
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

import React from 'react';

const Tasks = () => {
  // const showAllTasks = true;
  const tasks = [
    {
      title: 'Research collaborative governance models',
      description: 'Love organizational theory? Help us explore how collaborative governance can shape our platform. Your reserch will directly influence our roadmap.',
      deadline: 'May 15'
    },
    {
      title: 'Write answers to common questions',
      description: 'Our community is asking great questions! Help us document clear, helpful answers that everyone can reference.',
      deadline: 'May 15'
    },
    {
      title: 'Create video tutorials',
      description: 'Got video skills? We need someone to create friendly easy-to-follow tutorials showing people how to get started with our platform.',
      deadline: 'May 15'
    }
  ];

  return (
    <section id="contribute" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Join us and make an impact
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          We practice what we preach. Help us build and improve our platform, and you'll earn real ownership in what we're creating. Check out what we're working on and jump in wherever you can help!
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transiton">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{task.title}</h3>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <p className="text-sm text-blue-600 font-semibold mb-4">Apply by {task.deadline}</p>
              <button className="w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transiton">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Duplicate row for visual effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tasks.map((task, index) => (
            <div key={index + 3} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{task.title}</h3>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <p className="text-sm text-purple-600 font-semibold mb-4">Apply by {task.deadline}</p>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;

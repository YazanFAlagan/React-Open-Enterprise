import React from 'react';

const Tasks = () => {
  const tasks = [
    {
      title: 'Ideate a list of features based on the Sociocracy model',
      description: 'We\'re looking for someone interested in business theory and research that\'ll help us bridge the gap between our s...',
      deadline: 'May 15'
    },
    {
      title: 'Update documentation with FAQs',
      description: 'Review our community chat for the most frequently asked questions and document answers for our product docs.',
      deadline: 'May 15'
    },
    {
      title: 'Tutorial video series',
      description: 'Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.',
      deadline: 'May 15'
    }
  ];

  return (
    <section id="contribute" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Help us improve Open Enterprise
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{task.title}</h3>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <p className="text-sm text-blue-600 font-semibold mb-4">Apply by {task.deadline}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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

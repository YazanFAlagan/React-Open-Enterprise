import React from 'react';

const Contributors = () => {
  const maxApplicants = 10;
  const applicants = [
    { name: 'Yazan', rating: 4.8 },
    { name: 'Ahmed', rating: 4.8 },
    { name: 'Asmaa', rating: 4.8 }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Talented people, when you need them
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          Sometimes you need extra hands on deck. We make it easy to post tasks, find skilled contributors, and reward them fairly - whether with payment or ownership shares.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 ">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Help us write a getting started guide
            </h3>
            <p className="text-gray-600 mb-6">
              We need a talented writer who can explain our platform in a clear friendly way. If you love making complex things simple, wed love to work with you!
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">3 applicants</h4>
              <div className="space-y-3">
                {applicants.map((applicant, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg ">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="font-semibold text-gray-900">{applicant.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-semibold">{applicant.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Khalaf</h3>
                <p className="text-gray-600 mb-2">UX Designer</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>4 COMMITS</span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributors;

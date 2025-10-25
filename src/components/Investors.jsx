import React from 'react';

const Investors = () => {

    return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Growing with the right partners
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
          After launching our MVP, amazing people started reaching out. Now we can bring investors and advisors into the fold easilly, giving them a real stake in what were building together.
        </p>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
          <div className="flex items-end gap-4 mb-6 ">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Khalaf</h3>
              <p className="text-gray-600 mb-3">Pre-seed angel investor</p>
              <p className="text-gray-700 italic mb-4">
                "I've been following your progress and I'm really impressed. Count me in - let's build something incredible together!"
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transiton">
                COMMIT
              </button>
            </div>
          </div>
          
          <div className="flex gap-8 mt-6 pt-6 border-t border-gray-300">
            <div>
              <p className="text-3xl font-bold text-gray-900">10,000 DAI</p>
              <p className="text-gray-600">Investment</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">20 SHARES</p>
              <p className="text-gray-600">Equity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Education</h1>
          <p className="text-indigo-100 text-lg">Academic qualifications and professional development</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Degrees Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Degrees</h2>
          
          <div className="space-y-6">
            {/* Ph.D. */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ph.D.</h3>
                  <p className="text-gray-600 font-semibold text-lg mb-1">GGSIP University, Dwarka, New Delhi</p>
                  <p className="text-gray-600 mb-4">Research Area: Manufacturing Technology & Automation</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-indigo-600">2022</p>
                  <p className="text-gray-600 text-sm">Completed</p>
                </div>
              </div>
            </div>

            {/* M.Tech */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">M. Tech - Manufacturing Technology and Automation</h3>
                  <p className="text-gray-600 font-semibold text-lg mb-1">Al-Falah School of Engineering and Technology</p>
                  <p className="text-gray-600">Faridabad, Haryana (Affiliated to MDU, Rohtak)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">75.9%</p>
                  <p className="text-gray-900 font-semibold">First Division</p>
                  <p className="text-gray-600 text-sm">2014</p>
                </div>
              </div>
            </div>

            {/* B.Tech */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">B. Tech - Mechanical Engineering</h3>
                  <p className="text-gray-600 font-semibold text-lg mb-1">Al-Falah School of Engineering and Technology</p>
                  <p className="text-gray-600">Faridabad, Haryana (Affiliated to MDU, Rohtak)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">72.6%</p>
                  <p className="text-gray-900 font-semibold">First Division</p>
                  <p className="text-gray-600 text-sm">2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AICTE FDPs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AICTE Recognized Faculty Development Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Smart Computing Era</h3>
              <p className="text-gray-600 text-sm mb-1">Six Days ATAL FDP</p>
              <p className="text-gray-600 text-sm">November 3-8, 2025</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Application of AI-ML in Emerging Fields</h3>
              <p className="text-gray-600 text-sm mb-1">Five Days FDP</p>
              <p className="text-gray-600 text-sm">July 29 - August 2, 2024</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Deep Learning, Generative AI and Data Science</h3>
              <p className="text-gray-600 text-sm mb-1">Five Days FDP</p>
              <p className="text-gray-600 text-sm">May 6-10, 2024</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Project Planning and Management</h3>
              <p className="text-gray-600 text-sm mb-1">AICTE Recognized FDP</p>
              <p className="text-gray-600 text-sm">February 5-9, 2024</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Effective Teaching Learning Using Social Media</h3>
              <p className="text-gray-600 text-sm mb-1">AICTE Recognized FDP</p>
              <p className="text-gray-600 text-sm">June 5-9, 2023</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Practical Skills in Technical Education</h3>
              <p className="text-gray-600 text-sm mb-1">AICTE Recognized FDP</p>
              <p className="text-gray-600 text-sm">November 25-29, 2019</p>
            </div>
          </div>
        </div>

        {/* Workshops & Seminars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshops & Seminars</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Technical Workshops</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Fiber Optics Testing & Measurements</p>
                      <p className="text-gray-600 text-sm">March 21-23, 2022</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Finite Element Analysis of Structures</p>
                      <p className="text-gray-600 text-sm">August 20-21, 2018</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Advanced Hybrid Materials Processing</p>
                      <p className="text-gray-600 text-sm">February 9-10, 2017</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Special Training Programs</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Innovations & Applications in Engineering Materials</p>
                      <p className="text-gray-600 text-sm">February 3-7, 2025</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Circular Economy and Waste Management</p>
                      <p className="text-gray-600 text-sm">January 29 - February 2, 2024</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold">▪</span>
                    <div>
                      <p className="font-semibold text-gray-900">Recent Developments in Renewable Energy</p>
                      <p className="text-gray-600 text-sm">June 20-24, 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* International Conferences */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">International Conferences Attended</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">3rd International Conference on AI, ML and Cybersecurity (ICAMC-2025)</p>
              <p className="text-gray-600 text-sm mt-2">May 1-2, 2025 | HMR Institute of Technology</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">2nd International Conference on AI, ML and Cybersecurity (ICAMC-2024)</p>
              <p className="text-gray-600 text-sm mt-2">May 16-17, 2024 | HMR Institute of Technology</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">International Conference on AI, ML and Cybersecurity (ICAMC-2023)</p>
              <p className="text-gray-600 text-sm mt-2">May 11-12, 2023 | HMR Institute of Technology</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">Future Learning Aspects of Mechanical Engineering (FLAME 2022)</p>
              <p className="text-gray-600 text-sm mt-2">August 3-5, 2022 | Amity University, Noida</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">Materials and Manufacturing Engineering (ICMME-2021)</p>
              <p className="text-gray-600 text-sm mt-2">October 22-23, 2021 | HMR Institute of Technology</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="font-bold text-gray-900">Innovation in Cyber Physical Systems (ICICPS 2020)</p>
              <p className="text-gray-600 text-sm mt-2">October 22-23, 2020 | HMR Institute of Technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
